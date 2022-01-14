const socialName = {
  github: 'rafael-santos-xrg',
  twitter: 'rfael_sntos',
  rocketseat: 'me/victor-rafael-miranda-dos-santos-07148',
  linkedin: 'in/victor-rafael-xrg'
}

function changeSocialLinks () {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

       li.children[0].href= `https://${social}.com/${socialName[social]}`
  }
}

changeSocialLinks ()