// Actions
exports.wait = () => {
  return `[⏳] Wait a moment...`
}
exports.done = () => {
  return `[☑️] Success!`
}
exports.kicking = () => {
  return `Kicking : `
}
exports.adding = () => {
  return `Adding : `
}
exports.demoting = () => {
  return `Demoting : `
}
exports.promoting = () => {
  return `Promoting : `
}

// Permission
exports.notAllowed = () => {
  return `[❕] This command is not permitted by the owner.`
}

// Require
exports.needQuery = () => {
  return `[❕] Query parameters not found.`
}
exports.needLink = () => {
  return `[❕] The link parameter was not found.`
}
exports.onlyGroup = () => {
  return `[❕] This command can only be used in groups.`
}
exports.onlyAdmin = () => {
  return `[❕] This command can only be used by group admins.`
}
exports.onlyBotAdmin = () => {
  return `[❕] This command can only be used if the bot has become a group admin.`
}
exports.needTag = () => {
  return `[❕] Tag the person!`
}
exports.useCountryNum = () => {
  return `[❕] Use country code!`
}

// Result
exports.yt3res = (title, quality, type, size) => {
  return `
╭﹝🅈🅃🄼🄿③﹞
├ Title : ${title}
├ Quality : ${quality}
├ Type : ${type}
├ Size : ${size}
╰────────
`
}
exports.ghstalk = (user, bio, company, email, twit, pr, pg, follower, following, loc) => {
  return `
╭﹝🄶🄷 🅂🅃🄰🄻🄺﹞
├ User : ${user}
├ Bio : ${bio}
├ Company : ${company}
├ Email : ${email}
├ Twitter Username : ${twit}
├ Public Repos : ${pr}
├ Public Gists : ${pg}
├ Follower : ${follower}
├ Following : ${following}
├ Location : ${loc}
╰─────────────
`
}
exports.sizeMax = (url) => {
  return `The file size is too large. Download the manual file in this link.\n*Link:* ${url}`
}
exports.yt4res = (res) => {
  return `
╭﹝🅈🅃🄼🄿④﹞
├ Title : ${res[0].judul}
├ Quality : ${res[0].quality}
├ Size : ${res[0].size}
├ Type : ${res[0].tipe}
╰─────────
`
}

// Feature
exports.nsfwHasOn = () => {
  return `[❕] Nsfw has been active before.`
}
exports.nsfwOff = () => {
  return `[❕] Nsfw is not enabled.`
}

// Invalid
exports.invalidLink = () => {
  return `[❕] The link is invalid!`
}
