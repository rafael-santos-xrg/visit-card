const socialName = {
  github: 'rafael-santos-xrg',
  twitter: 'rfael_sntos',
  linkedin: 'in/victor-rafael-xrg'
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('id')

    li.children[0].href = `https://${social}.com/${socialName[social]}`
  }
}

changeSocialLinks()

function getGithubInfos() {
  const url = `https://api.github.com/users/${socialName.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      profilePhoto.src = data.avatar_url
      githubUserName.textContent = data.name
      siteRocketseat.href = data.blog
    })
}

getGithubInfos()


function putIcons(liID, iN, altTx) {
  let id = `#${liID}`
  let path = `images/icon${iN}.png`
  let alt = altTx
  const img = document.createElement("img")
  const target = document.querySelector(id)
  img.src = path
  img.alt = alt
  img.classList.add("icon")
  target.innerHTML = ""
  target.insertAdjacentElement("beforeend", img)
}
putIcons("githubLink", "1", "Ícone Github")
putIcons("twitterLink", "2", "Ícone Twitter")
putIcons("siteRocketseat", "3", "Ícone Rocktseat")
putIcons("linkedinLink", "4", "Ícone Linkedin")