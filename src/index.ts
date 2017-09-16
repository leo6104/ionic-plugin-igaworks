import { Cordova, IonicNativePlugin, Plugin } from "@ionic-native/core";
import { Injectable } from "@angular/core";

@Plugin({
    pluginName: 'IGAWorks',
    plugin: 'cordova-plugin-igaworks',
    pluginRef: 'igaWorksConnectPlugin',
    platforms: ['Android']
})
@Injectable()
export class IGAWorks extends IonicNativePlugin {

    @Cordova()
    setUserID(): Promise<any> {
        return;
    }

    @Cordova()
    openOfferWall(): Promise<any> {
        return;
    }

    @Cordova()
    openDialogTypeOfferWall(): Promise<any> {
        return;
    }
}
