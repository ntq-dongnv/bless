(async () => {
    const supabase = require("./helpers").createSupabaseClient();

    const { data, error } = await supabase
      .from("bless")
      .select("*, bless_nodes(count)").eq('email', 'a.l.l.i.evindabai@gmail.com').gt('bless_nodes(count)', 0)
      console.log(data[0].bless_nodes);
      

    // try {
    //     const res = await fetch(`https://gateway-run.bls.dev/api/v1/nodes/112D3KooWE3Pgwo9RNfEAq86zkWwcvvZ8HsU3WBU9CTjBfwa996jZ`, {
    //         "headers": {
    //             "accept": "*/*",
    //             "accept-language": "en-US,en;q=0.9",
    //             "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM5ODZkYTg2ZjMwNzQ4NGZiNjhlYjkiLCJwdWJsaWNBZGRyZXNzIjoiRk1pQVhOWExnTG9HYmhvVkdXNU10WnhxZ0RGUW1jZ0RDUnYxWkZ3OXJtV28iLCJ3YWxsZXRUeXBlIjoic29sYW5hIiwiaWF0IjoxNzMyODczNjkyLCJleHAiOjE3NjQ0MzEyOTJ9.06tmoT2ZFIWvlyknEssbMECWY1lJMvhmgrcbqYzrIXY",
    //             "content-type": "application/json",
    //             "priority": "u=1, i",
    //             "sec-ch-ua": "\"Not?A_Brand\";v=\"99\", \"Chromium\";v=\"130\"",
    //             "sec-ch-ua-mobile": "?0",
    //             "sec-ch-ua-platform": "\"macOS\"",
    //             "sec-fetch-dest": "empty",
    //             "sec-fetch-mode": "cors",
    //             "sec-fetch-site": "cross-site",
    //             "Referer": "https://bless.network/",
    //             "Referrer-Policy": "strict-origin-when-cross-origin"
    //         },
    //         "body": null,
    //         "method": "GET"
    //     });

    //     const data = await res.status(); // Thêm dòng này để parse JSON
    //     console.log(data);
        
    // } catch (e) {
    //     console.log(e, lỗi);
        
    // }


})()