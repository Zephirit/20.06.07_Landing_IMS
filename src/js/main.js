import BeforeAfter from 'before-after'
window.onload = () => {
	function _sendEmail() {
		const forms = document.querySelectorAll('.form__input')
		forms.forEach(frm => {
			frm.onsubmit = (e) => {
				e.preventDefault()
				let frmData = new FormData(frm)
				fetch('send.php', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: frm.name.value,
						phone: frm.phone.value
					})
				}).then(response => alert('Сообщение отправлено')).then(() => {
					frm.reset()
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

		let _getTop = (id) => {
			return sections[id].top
		}
		return {
			getTop: _getTop
		}
	}

	function _scrollSection(target) {
		const element = document.querySelector('#' + target)
		const targetPos = _sectionsPosition().getTop(target)
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
			beforaAfterItem.create();
			const contWidth = document.querySelector('.beforeAfterBody__list').clientWidth / 2;
			beforaAfterItem.cursor.style.transform = `translate(${contWidth}px, 0px) translateZ(0px)`
			tabs[0].querySelector('.beforeafter-itemActive').style.width = contWidth + 'px'
		}
		links.forEach((link, index) => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				if (isBaSlider) {
					beforaAfterItem.destroy()
					beforaAfterItem = new BeforeAfter({
						element: tabs[index]
					})
					beforaAfterItem.create();
					const contWidth = document.querySelector('.beforeAfterBody__list').clientWidth / 2;
					beforaAfterItem.cursor.style.transform = `translate(${contWidth}px, 0px) translateZ(0px)`
					tabs[index].querySelector('.beforeafter-itemActive').style.width = contWidth + 'px'
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
	function _initGallery() {
		console.log(1)
    lightGallery(document.getElementById('lightgallery'));
  }
	function _checkBurger() {
		const burger = document.querySelector('.navigation__burger')
		const list = document.querySelector('.navigation__list')
		burger.addEventListener('click', (e) => {
			e.preventDefault()
			list.classList.toggle('active')
		})
	}
	const linksAdv = document.querySelectorAll('.descriptionMenu__item')
	const tabsAdv = document.querySelectorAll('.descriptionBody__item')
	const linksBA = document.querySelectorAll('.beforeAfterMenu__item')
	const tabBA = document.querySelectorAll('.beforeAfterBody__img')
	const linksQuestion = document.querySelectorAll('.questionsBody__item')
	const accsQuestion = document.querySelectorAll('.questionsBody__desc')

	function init() {
		_sendEmail()
		_getLinks()
		_tabs(linksAdv, tabsAdv)
		_tabs(linksBA, tabBA, true)
		_accordion(linksQuestion, accsQuestion)
		_checkBurger()
		_initGallery()
	}
	init()
}