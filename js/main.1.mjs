import BeforeAfter from 'before-after'
window.onload = () => {
	console.log("Страница загружена")

	function _sendEmail() {
		const forms = document.querySelectorAll('.form__input')
		forms.forEach(frm => {
			frm.onsubmit = (e) => {
				e.preventDefault()
				fetch('send.php', {
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

	function _tabs(links, tabs, isBaSlider) {
		let beforaAfterItem;
		tabs[0].classList.add('active')
		if (isBaSlider) {
			beforaAfterItem = new BeforeAfter({
				element: tabs[0]
			})
			beforaAfterItem.create();
		}
		links.forEach((link, index) => {
			console.log(index, link)
			link.addEventListener('click', (e) => {
				e.preventDefault()
				if (isBaSlider) {
					beforaAfterItem.destroy()
					beforaAfterItem = new BeforeAfter({
						element: tabs[index]
					})
					beforaAfterItem.create();
				}
				tabs.forEach(tab => {
					tab.classList.remove('active')
					tabs[index].classList.add('active')
				});
			})
		});
	}

	function _accordion(links, accs) {
		links.forEach((link, index) => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				if (accs[index].classList.contains('active')) {
					accs[index].classList.remove('active')
				} else {
					accs[index].classList.add('active')
				}
			})
		});
	}
	const linksAdv = document.querySelectorAll('.descriptionMenu__item')
	const tabsAdv = document.querySelectorAll('.descriptionBody__item')
	const linksBA = document.querySelectorAll('.beforeAfterMenu__item')
	const tabBA = document.querySelectorAll('.beforeAfterBody__img')
	const linksQuestion = document.querySelectorAll('.questionsBody__item')
	const accsQuestion = document.querySelectorAll('.questionsBody__desc')

	function init() {
		// _sendEmail()
		_getLinks()
		_tabs(linksAdv, tabsAdv)
		_tabs(linksBA, tabBA, true)
		_accordion(linksQuestion, accsQuestion)
	}
	init()
}