const socialName = {
  github: 'rafael-santos-xrg',
  twitter: 'rfael_sntos',
  linkedin: 'in/victor-rafael-xrg'
}

function changeSocialLinks () {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

       li.children[0].href= `https://${social}.com/${socialName[social]}`
  }
}

changeSocialLinks ()

function getGithubInfos (){
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