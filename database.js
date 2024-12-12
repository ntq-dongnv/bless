const supabase = require("./helpers").createSupabaseClient();

async function fetchBlessAccountsForRegNode(limit = 100000) {
  let allData = [];
  let page = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from("bless")
      .select("*")
      .lt("node_count", 5)
      .order("node_count", { ascending: false })
      .range(page * pageSize, (page + 1) * pageSize - 1);

    if (error) {
      console.error("Error fetching data:", error);
      break;
    }

    if (data.length === 0) {
      break;
    }

    allData = allData.concat(data);

    if (limit && allData.length >= limit) {
      allData = allData.slice(0, limit);
      break;
    }

    page++;
  }

  return allData;
}

async function updateBlessAccount(email, data) {
  return await supabase.from("bless").update(data).eq("email", email);
}

async function incrementNodeCount(email) {
  const { data: currentData, error: currentError } = await supabase
    .from("bless")
    .select("node_count")
    .eq("email", email)
    .single();

  if (currentError) {
    console.error("Lỗi khi lấy node_count hiện tại:", currentError);
    throw currentError;
  }

  const currentNodeCount = currentData.node_count;
  const { error: updateError } = await supabase
    .from("bless")
    .update({
      node_count: currentNodeCount + 1,
    })
    .eq("email", email);

  if (updateError) {
    console.error("Lỗi khi tăng node_count:", updateError);
    throw updateError;
  }
  return currentNodeCount + 1;
}

const getRandomBless = async () => {
  const { count } = await supabase
    .from("bless")
    .select("*", { count: "exact", head: true })
    .not("ref_code", "is", null);

  const randomOffset = Math.floor(Math.random() * count);

  const { data, error } = await supabase
    .from("bless")
    .select("ref_code")
    .not("ref_code", "is", null)
    .range(randomOffset, randomOffset)
    .single();

  if (error) {
    console.error("Error:", error);
    return null;
  }

  return data;
};

async function createNode(email, nodeData) {
  if (!email || !nodeData) {
    throw new Error("Reg node thất bại, kiểm tra params");
  }

  const { data, error } = await supabase.from("bless_nodes").insert({
    email: email,
    peerEncryptedPrivKey: nodeData.peerEncryptedPrivKey,
    peerPubKey: nodeData.peerPubKey,
  });

  if (error) {
    throw new Error(`Tạo node thất bại: ${error.message}`);
  }

  return data;
}

module.exports = {
  fetchBlessAccountsForRegNode,
  updateBlessAccount,
  getRandomBless,
  createNode,
  incrementNodeCount,
};

// (async () => {
//   await getRandomBless();
// })();
