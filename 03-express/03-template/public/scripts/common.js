$.ajax({
    url: '/api/list',
    dataType: "json",
    success: function (result, textStatus) {
        const data = result?.data || []
        let html = '<ul>'
        $.each(data, (index, value) => {
            html += `<li>${value}</li>`
        })
        html += '</ul>'
        $('.list').html(html)
    },
    error: function (jqxhr, textStatus, error) {
        console.log(error)
        console.log(textStatus)
        console.log(jqxhr)
    }
})