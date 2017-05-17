

import { OS } from "app/globals";

export class Utils {

    public static getMobileOS(): OS {
            var userAgent = navigator.userAgent || navigator.vendor || window["opera"];

            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                    return OS.WP;
            }

            if (/android/i.test(userAgent)) {
                    return OS.A;
            }

            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            if (/iPad|iPhone|iPod/.test(userAgent) && !window["MSStream"]) {
                    return OS.IOS;
            }

            return OS.Other;
    }
}

    



