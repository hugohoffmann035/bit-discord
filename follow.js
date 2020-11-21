document.querySelectorAll('.member-3-YXUe').forEach((item, idx) => {
    setTimeout(() => {
		document.querySelector('.membersWrap-2h-GB4 > div').scrollTo(0, document.querySelector('.membersWrap-2h-GB4').scrollHeight + idx * 3)
		item.click();
		document.querySelector('.layer-v9HyYc > div > div > div > div > div > div').click()
		if(document.querySelector('[role="dialog"] > div > div > header > button > div').textContent.trim().toLowerCase() !== 'enviar mensagem') {
			document.querySelector('[role="dialog"] > div > div > header > button').click()
		}
		document.querySelector('.backdrop-1wrmKB').click()
    }, idx * 12000)
})