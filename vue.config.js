module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
      productName: "OWallet",
      appId: "org.ont.wallet",
      win: {
        target: [
          "nsis"
        ],
        icon: "public/icons/icon.ico"
      },
      nsis: {
        oneClick: false,
        perMachine: true,
        allowToChangeInstallationDirectory: true
      },
      linux: {
        target: [
          "deb",
          "AppImage"
        ],
        icon: "public/icons"
      },
      mac: {
        icon: "public/icons/icon.icns"
      }
    },
    }
  }
}