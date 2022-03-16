const socialName = {
  github: 'rafael-santos-xrg',
  twitter: 'rfael_sntos',
  linkedin: 'in/victor-rafael-xrg'
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

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


function putIcons(liID, iN, altTx, iI) {
  let id = `#${liID}`
  let path = `images/icon${iN}.png`
  let alt = altTx
  let newId = iI
  const img = document.createElement("img")
  const target = document.querySelector(id)
  img.src = path
  img.alt = alt
  img.id = newId
  target.innerHTML = ""
  target.insertAdjacentElement("beforeend", img)
}
putIcons("githubLink", "1", "Ícone Github", "githubIcon")
putIcons("twitterLink", "2", "Ícone Twitter", "twitterIcon")
putIcons("siteRocketseat", "3", "Ícone Rocktseat", "rocketseatIcon")
putIcons("linkedinLink", "4", "Ícone Linkedin", "linkedinIcon")