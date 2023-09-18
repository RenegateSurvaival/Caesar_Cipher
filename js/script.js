const text = document.querySelector('#text'),
			cripto = document.querySelector('#cripto'),
			decripto = document.querySelector('#decripto'),
			key = document.querySelector('#key'),
			goBtn = document.querySelector('#go'),
			comText = document.querySelector('#compdited-text');



			function caesarEncryptionRu(message, shift) {
				shift--;
				let encrypted = "";
				for (let i = 0; i < message.length; i++) {
					let char = message.charAt(i);
					if (char.match(/[а-яА-Я]/u)) { 
						let unicodeVal = char.charCodeAt(); 
						if (char === char.toLowerCase()) { 
							encrypted += String.fromCharCode(((unicodeVal - 1071 + shift) % 33) + 1072); 
						} else { 
							encrypted += String.fromCharCode(((unicodeVal - 1040 + shift) % 33) + 1040); 
						}
					} else { 
						encrypted += char; 
					}
				}
				comText.value = encrypted;
			}
			
			function caesarDecryptionRu(message, shift) {
				return caesarEncryptionRu(message, 33 - shift); 
			}

			
			function mainCryption() {
				if(key.value > 31){key.value = 31};
				if(key.value < 0){key.value = 0};
				if(cripto.checked == true) {
					caesarEncryptionRu((text.value).toLowerCase(), key.value);
				};
				if(decripto.checked == true) {
					caesarDecryptionRu((text.value).toLowerCase(), key.value);
				}
			}




			goBtn.addEventListener('click', ()=> {
				mainCryption();
			})