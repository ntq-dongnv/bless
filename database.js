const supabase = require("./helpers").createSupabaseClient();


async function fetchAccounts() {
    let allData = [];
    let page = 0;
    const pageSize = 1000;

    while (true) {
        const { data, error } = await supabase
            .from("bless")
            .select('*')
            .eq("status", 'NOT_REGISTERED')
            .range(page * pageSize, (page + 1) * pageSize - 1);

        if (error) {
            console.error("Error fetching data:", error);
            break;
        }

        if (data.length === 0) {
            break; // Không còn dữ liệu
        }

        allData = allData.concat(data);
        page++;
    }

    return allData;
}
