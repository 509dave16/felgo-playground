import Felgo 3.0

import QtQuick 2.10
import QtQuick.Controls 2.3
import QtQuick.Layouts 1.0
import QtQuick.Window 2.2
import QtQuick.Dialogs 1.1

// this is to avoid exposing WebSocket QML object to JS environment
import QtWebSockets 1.0 as QtWS
import Qt.labs.settings 1.0
import Qt.labs.platform 1.0
import QtQuick.LocalStorage 2.0
import QtGraphicalEffects 1.0
// import ReactQML 1.0

import "osx.bundle.js" as JS;

App {
  id: root
  // You get free licenseKeys from https://felgo.com/licenseKey
  // With a licenseKey you can:
  //  * Publish your games & apps for the app stores
  //  * Remove the Felgo Splash Screen or set a custom one (available with the Pro Licenses)
  //  * Add plugins to monetize, analyze & improve your apps (available with the Pro Licenses)
  //licenseKey: "<generate one from https://felgo.com/licenseKey>"
  title: qsTr("Main Page")
  Component.onCompleted: {
    try {
      console.log('we started!!!', JS.Bundle)
      JS.Bundle(root)
    } catch (ex) {
      console.log(ex)
      Qt.quit()
    }
  }
}
