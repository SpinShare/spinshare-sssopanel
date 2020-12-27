module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "SSSO Panel",
                appId: "re.spinsha.client",
                win: {    
                    icon: "build/icons_AppIcon.ico"
                },
                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                },
                mac: {
                    category: "public.app-category.music-games",
                    target: "dmg",
                    icon: "build/AppIcon.icns"
                },
                dmg: {
                    backgroundColor: "#212629"
                }
            }
        }
    }
}
