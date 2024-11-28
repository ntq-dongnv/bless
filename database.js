const supabase = require("./helpers").createSupabaseClient();

async function fetchBlessAccounts(status, limit = 1000) {
  let allData = [];
  let page = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from("bless")
      .select("*")
      .eq("status", status)
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

function updateBlessAccount(email, data) {
  return supabase.from("bless").update(data).eq("email", email);
}

module.exports = {
  fetchBlessAccounts,
  updateBlessAccount,
};
