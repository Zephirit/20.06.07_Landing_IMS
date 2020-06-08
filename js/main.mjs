window.onload = () => {
	console.log("Страница загружена")

	function _sendEmail() {
		const forms = document.querySelectorAll('.form__input')
		forms.forEach(frm => {
			frm.onsubmit = (e) => {
				e.preventDefault()
				fetch('../send.php', {
					method: 'POST',
					body: new FormData(frm)
				})
			}
		});
	}

	function _sectionsPosition() {
		let sections = {}
		document.querySelectorAll('.section').forEach(section => {
			let topPos = section.getBoundingClientRect().top + pageYOffset
			sections[section.id] = {}
			sections[section.id].top = topPos
		});
		console.log(sections)

		let _getTop = (id) => {
			console.log(id)
			return sections[id].top
		}
		return {
			getTop: _getTop
		}
	}

	function _scrollSection(target) {
		const element = document.querySelector('#' + target)
		const targetPos = _sectionsPosition().getTop(target)
		console.log(element, targetPos)
		if (target === 'description') {
			const menu = document.querySelector('.descriptionMenu')
			const menuHeight = menu.clientHeight
			window.scroll({
				top: targetPos - menuHeight,
				behavior: 'smooth'
			})
		} else {
			window.scroll({
				top: targetPos,
				behavior: 'smooth'
			})
		}

	}

	function _getLinks() {
		document.querySelectorAll('.link').forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				const target = link.getAttribute('data-target')
				_scrollSection(target)
			})
		})
	}

	function init() {
		_sendEmail()
		_getLinks()
	}
	init()
}