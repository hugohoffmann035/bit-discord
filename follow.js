document.querySelectorAll('.member-3-YXUe').forEach((item, idx) => {
    setTimeout(() => {
		item.click();
		document.querySelector('.layer-v9HyYc > div > div > div > div > div > div').click()
		if(document.querySelector('[role="dialog"] > div > div > header > button > div').textContent.trim().toLowerCase() !== 'enviar mensagem') {
			document.querySelector('[role="dialog"] > div > div > header > button').click()
		}
		document.querySelector('.backdrop-1wrmKB').click()
    }, idx * 12000)
})