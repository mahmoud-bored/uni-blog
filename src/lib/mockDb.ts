export interface DataGroup {
    title: string;
    data: {
        [key: number]: [
            "link" | "header", 
            string, 
            "pdf" | "pdf_extra" | "ppt" | "docx" | "yt" | null, 
            string | null
        ];
    };
}
export interface DbData {
    [key: number]: DataGroup
}

export const db: Map<string, DbData> = new Map() 
db.set('anatomy', {
    0: {
        title: "Lectures",
        data: {
            0: ["header", "W1", null, null],
            1: ["link", "1- Anterior Abdominal Wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVE7NBMEOMxJtTpecO3d0BoBM8VNeBOOXHsUd1AyqKDJQA?e=fuDE5J"],
            2: ["link", "2- Inguinal Canal (2025-2026).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EeEVjXGhHGJJh67nUiOMGOcBDajnIiCJ2xfBzTfDdGbhuA?e=MOcMdu"],
            3: ["link", "3- Anterior abd. wall nerves and vessels.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWhWJwu3UqJIufry2BSD3UMB2xmtXvhbSW-3YaLNZUmmow?e=9103tM"],
            4: ["link", "anterior abd. wall muscles.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcH6eDhdxmJFjkuSvEUbrqcBO1-2CrshKxGXvy8A7_lt5Q?e=aWGieC"],
            5: ["header", "W2", null, null],
            6: ["link", "1- Male external genitalia.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EV15r48ZPxhFguE3pOgDTdUBp8dOU2tkeVNI_6ZJH8yJ2g?e=dI1ZXL"],
            7: ["link", "2- Regions of abdomen.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESXEu6v5yolDtCF5QTUKBqwB2x1Qso3N_VTfK68bbGlLTQ?e=6dtV5i"],
            8: ["link", "3- Peritoneum.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX3WsrqyisVPtTghPkWBt_4BNJ6GsSHqlSLmgbhVXXIzvA?e=ZAxhnN"],
            9: ["link", "4- Stomach and Duodenum.ppt", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ea9-iUxwovZKg2d8r4zZ_rIB9fN8ZPqeVsQLPECH-vAgtg?e=7yBdpZ"],
            10: ["link", "5- Small and large Intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ER6He8O0LjZAnrxBJAIkl5cBjkiMriN5G21JaQx4n_cHmA?e=id5fff"],
            11: ["link", "Duodenum.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EThjU3n6j7NHkWgcOqRYZzMBil7b7GOb0v6vdndCD0xOUA?e=Jhdd9J"],
            12: ["link", "large intestine final.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ER6plYpqkhZBmaG3aU1AxecBZLOJ-azknYa3tKNvvDvDSA?e=zc5QNs"],
            13: ["link", "Large intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUA1eGsGDKJBiKZT9AHbIe0BTwhjzamdOPbXFFfGIEDzjw?e=grzWpZ"],
            14: ["link", "Peritoneum part 1 (2).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZm6zib6rmtNg6WTdAbb2fMBru26Xar9tY82gXDlXfc0IA?e=xaFzrI"],
            15: ["link", "Peritoneum part 2.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EW-0kiazcn1OoGSrBs8XgYIBrwCuiSUN-RkSAJqIjYvs5A?e=Zb4w8x"],
            16: ["link", "Small Intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXBaVWzNEcBHqHbBtMKYw7gBj_sOP08BtfU_2IBq5bdfyQ?e=AWjjrq"],
            17: ["link", "Stomach.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EekHXMFoSa1Dh3guoshybmsBXU0z2aV2mbKvcWBOOlp7hQ?e=Fdf1at"],
            18: ["header", "W3", null, null],
            19: ["link", "Kidney.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX701NBfH4hOveXHGiPokFAB3wpAgLw1Vc35msQ9e42htw?e=h0eWSQ"],
            20: ["link", "liver and biliary system.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWhcHbVsyvFDuWjwZHWdhwgBhRJLSYlTTVzJ-TY1PlQ7SA?e=BAozNp"],
            21: ["header", "W4", null, null],
            22: ["link", "Blood Supply of the Gut I and II.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXXuKyMI5z5HuJiOgLcUrD0Bj_450FqmDU-3U4hFnGW6RQ?e=O2SVIV"],
            23: ["link", "Portal Vein and Portosystemic anastomoses.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXSEsvtdh6NJunJB2rfh2zcBa7Hl1UYXmSLBPwD7Oj5Dlw?e=Z3Hufm"],
            24: ["header", "W5", null, null],
            25: ["link", "1- Pancrese,GB,spleen.ppt", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcruSW4ZnGFLtDqtGD1BdJEB0Y2qE74DtuolGDUgjTiqQw?e=qOUMg7"],
            26: ["link", "2- Posterior abdominal wall (Muscles).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYIr5i5wOWlJh7AvEt_qUwcBwdnoNvvMhHnpwHGWS0hmWA?e=QZDGzb"],
            27: ["link", "3- Vessels of posterior abdominal wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQuJpF5BLUVAp2lZanYPY5sB-MyvbqpYfBKVEQyvEPjNbg?e=qxr3HO"],
            28: ["link", "4- Lymphatic drainage and Nerves of Posterior abdominal wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ER81fiwUkWRMta-6ssnaKhIBDza3lCTuxfHGAdZro2PL1w?e=ndv3la"],
            29: ["header", "W6", null, null],
            30: ["link", "1- Development of Esophagus Stomach.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUDaA3ZRW8tHhDTpgfsRBisBwwX48ZzDISz9_3cjNrYUTQ?e=r9Nvzx"],
            31: ["link", "2- Development of Duodenum, Liver GB.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EesZoKKEggBHl8z32kgYxc8BUoAwIuzgRisgbCr7yphgZg?e=ClfVsf"],
            32: ["link", "3- Development of Pancreas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaEi92nIMdJCnkUt9KpfXAUBbAz6ufpEX7-BfiwvLIPs7Q?e=HRhpc0"],
            33: ["link", "4- Development of Midgut.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZK4QGsb26NHmam_hwZhnEUBq1extodivi041I6D19JQsQ?e=eLdBVT"],
            34: ["link", "5- Development of Hindgut.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbsZVC6YaolJup8DXm6hgawBtQuJDzde04tqTfFoKjkLyA?e=mbukSa"],
            35: ["header", "W7", null, null],
            36: ["link", "Anomalies of kidney Ureter Suprarenal gland.ppt", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EanF-VIrcZRAsvUYoEGyuP4BXDy5uOc80I1cWfCVnGJz3g?e=af3cRg"],
        }
    },
    1: {
        title: "Practical",
        data: {
            0: ["link", "1- Muscles of anterior abdominal wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUqw8mnMhnVNnT8cxBCFJf0BEasVvP1bHhbRqLt17iIoeg?e=OFAtHI"],
            1: ["link", "2- Male Genital System.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERXd_Wz83kNEmrovu1IBU7gBLg79C3uBQGdWStUi6kuRrQ?e=XBXRVB"],
            2: ["link", "3- Abdominal cavity Practical.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERqXY1zT1odPimmp7fEymUoBnRn2-yL1ux3vC9bJVYhXHw?e=HcwSYM"],
            3: ["link", "4- Stomach, intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ed5BBRtBHjtNu1Nix71bk0gBENERRAol9mEM6hVdr5fS8g?e=KA7DZX"],
            4: ["link", "5- Liver, Spleen practical.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZHeatfMzmBOvbH1I084jnMB6VP7A0J4bgSspfuiBdD_kw?e=dgbt8e"],
            5: ["link", "6- Post. abdominal wall [Muscles, Vessels, nerves] Kidney.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUByUywJtFBEpbYKoy12lrgB0M01eRJKbV7f7NqARtfArg?e=5hCak0"],
            6: ["link", "7- Final Anatomy Checklist GIT (206).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETAngA2C_zpEnVAFjVfrAzwB-kZuU22mrbWo_2K1qHsoag?e=CZOxVL"],
            7: ["link", "8- Cases Second Year-2026 (206).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZRBZ6wUfU9JthrADDvbex0B78aJjKjvdoJ3mMN577wd9g?e=s0kvtu"],
            8: ["link", "9- Congenital anomalies Second Year (206) Final Revision 2025-2026.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaephDSeU19Mp4TLebfHvrkBz-gxkFN7xVl8LMJ_jU73Hw?e=KORnQI"],
            9: ["link", "checklist for section 1 [anterior Abdominal Wall].docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETtlRuQ4nHNDm20kxSPp3DwBg5JsvNP7MILsa3uw77hEhw?e=BYhZB4"],
            10: ["link", "checklist for section 2 [Male Genital System].docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX1DpuO2sgpKkSwA6KIx2OkBnMMnYv3ctHs80e6yhCTkTQ?e=byoh64"],
            11: ["link", "checklist for section 3 [Abdominal Cavity].docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERzFpUUP6J1Hks6bp56PV_sB-puavmaUNoN9cXLSYj2umQ?e=pa0yHJ"],
            12: ["link", "checklist for section 4 [Stomach, Small Large intestine].docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbKjLqRexzZLtt9fNe_bBC8BWhMJXwCWlDRQoLWUxSrvsg?e=7Hcp66"],
            13: ["link", "checklist for section 5 [Liver, Spleen].docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ed5858Vv6Y9DvPIVRleExMsB5oKiZLYZVcqNB7_E62anVA?e=4ke97O"],
            14: ["link", "checklist for section 6 [posterior abdominal wall muscles, vessels, nerves, Kidney ureter.docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVsoQKtA5h1Eh01MRQ2eoCcBwkjDDoLjICv30W666txDRg?e=NZ8yoW"],
        }
    },
    2: {
        title: "Handout",
        data: {
            0: ["link", "1- Anterior Abdominal Wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQMjGfqKqR9MhezNpHND8SUBbcghu5uuu-SIsnvZ_lVRpA?e=t25hMf"],
            1: ["link", "2- Male External Genital System.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYSY4Uua-pNJvlPQ9XofUXsBTX04HBp6Onv-Rm0boOY12g?e=lp69dT"],
            2: ["link", "3- Abdominal Cavity (Planes and Regions).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQC2gbv5ABhNh0a5nhw0YBoBh0LKpC7Bve3Z7BXlR_xLew?e=dKJpnC"],
            3: ["link", "4- Peritoneum.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWK6KYH8Vb5Blu3BO7kD70EBG-xNH3-RqXdFgU8Yi84jVw?e=DdVRGW"],
            4: ["link", "5- Stomach.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX1JH13c4qJInYYxP6VyW7YBgqCruLxsFl5S7hAFuFF3iA?e=nXo6nQ"],
            5: ["link", "6- Small Intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EdbBDl3KTDFOjKQFCUpAhs8BGxiSsFETAlKccI8kEGoEPg?e=VQS5z4"],
            6: ["link", "7- Large Intestine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfcSaRaQbxFBoXvqXw1cJmoBOWHA-z4DGn-7W0QBsDmn_g?e=xCwoxW"],
            7: ["link", "8- Liver and Biliary System.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EedZbcL0VlVMvJTC-2vUfxYBYTxXLZQABiL_UdWwyWjKoA?e=BwFuLT"],
            8: ["link", "9- Kidney, Suprarenal G Ureter.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbVhbzFKpDxDkQVZqkEF9XEB7RHl4jgK7dQWYc-lfZGN4w?e=j8p21F"],
            9: ["link", "10- Arteries of the Gut Portal circulation.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eex2B_y26vJNk2pVuqmnBYMBXTUe0P0JyHYOskTS9IxoRA?e=NhNgMR"],
            10: ["link", "11- Pancrease.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQGYQjOx2uFEmAO11AQ-PKwBzUyRAIcenraCWWN3KvWxlg?e=RXbC3t"],
            11: ["link", "12- Spleen.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ET7edY8dXuZJqkToNFxnf6QBC_ZqgdvU3X4B5nmbtsZwFA?e=xOabpe"],
            12: ["link", "13- Posterior Abdominal Wall.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESPAp4QyL1hLhCFaylTXx84BX8dHXtgaiASrSU8607o5eQ?e=CPrjQV"],
            13: ["link", "14- Development of For, Mid and Hindgut.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERh-7qxuw1lJrtCy1ZG0ZDIBNpMv9lgemMZhz4ZTfOvDeA?e=4GmK6I"],
            14: ["link", "15- Anomalies of Kidney and Ureter.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EarQm363a_5Nlmln2ZfVaYsBtBhiASNG-E77xCGBmStPqQ?e=i9NLrz"],
            15: ["link", "16- Suprarenal Gland.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaXATCkofwJIuVoAMdltGlgB_ya3c39UyK08zKwBPMp6-A?e=KC2Fd4"]
        }
    },
    3: {
        title: "Assessment",
        data: {
            0: ["link", "Assessment 1 (206).doc", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/ET2NGlCfsDBAjZ1rvwEsPmsBPzLEH8FKHZc9buaWTsmqEQ?e=ORodZx"]
        }
    }
})

db.set('physiology', {
    0: {
        title: "Lectures kidney", 
        data: {
            0: ["link", "(1) introduction.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESiPxDnbZA1Ap6DxFgR1stoBL09avGjjRfPur6xkoRRHHw?e=qBdfgb"],
            1: ["link", "(2) GFR.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESyvWvY571RPnCD36bN6dcsBgvrWZXl4FtCxQK1SqI41Zg?e=P5R6MU"],
            2: ["link", "(3) GFR Control.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EeZZDYTarfdAkmJdjmENTAMBY_PgpZ-_W_ifDi8Z5qo_ag?e=5S255b"],
            3: ["link", "(4) Na reabsorption.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXpJtcguj0NFuH9LPj16YiABWPC_A4qtM3YxyH48_jOzew?e=6udKOI"],
            4: ["link", "(5) Na regulation.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZ3k4CUNUYhDkmv0Kn-HYR4Bbxw1ts6Vt737brTxZSF3IA?e=p5vG15"],
            5: ["link", "(6) Glucose reabsorption.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVXGCAKfwH5PvLxp7ACM7SwBOrjSh5mbd9XdJpmLKVAFtQ?e=GCvVJ3"],
            6: ["link", "(7) Water reabsorption.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYm3hbus179PgqQQsK1JRwQBbN1EHUVBV2Q5gmLKxyY6Bg?e=yOiA1t"],
            7: ["link", "(8) Concentrated Urine.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYLevhr6ZHNMoX4zckWcDvEB9tW4bT7sf7xTygbziNLJuA?e=SL5Zv9"],
            8: ["link", "(9) Hydrogen Secretion.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eee-DaXbOHZFhE6WHe7wCzgBtlbzRNVOLbD72cuJHXTGJw?e=FWRlZF"],
            9: ["link", "(10) Plasma Clearance.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYrUotrYvsdFoKuoi1K_KD4B3xS7iK8gDWAETEGwdO1jlA?e=0eofD3"],
            10: ["link", "(10) Summary Plasma Clearance.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWwr7_hdOsdBvdBzgSQbJ3sByQmJqjmBJrFSNGnWj4mZ1g?e=EROxvf"],
            11: ["link", "(11) Acid-Base Balance.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESujUAcmhj9FgoGeeuTHODgBs6vHqud2cZhtailJG8ocjQ?e=qDSV5I"],
            12: ["link", "(12) Micturtion.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERKHJBzOCkhKuwdSZTcx0rYBZhFHpx3GO7E9LM-ZfTbwhw?e=y6Mgo7"],
        }
    },
    1: {
        title: "Lectures GIT",
        data: {
            0: ["link", "(1) Nervous regulation of Dgestive system.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESoJXMw9fTNPugmUoF4YXxoBGaeRwdXbR3CMHtFOuN8BHQ?e=GvCYOi"],
            1: ["link", "(2) Hormonal regulation of Dgestive system .pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EY56XuFP5utFudyKE3vVK_IB7NdAeyz1qaTucUGocP8Ojg?e=4pYlRl"],
            2: ["link", "(3) Salivary secretion.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQbAeHpQcmlFh2DWWEsv-VQBsgsTU9xsI-G-Nz7GnS1q7Q?e=lUwNCJ"],
            3: ["link", "(4) Gastric Secretion .pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVJQeF_ss1RFt5yEP5_R9EsBFunqTaSdeFbBIYQGWfcsAg?e=RoFYEM"],
            4: ["link", "(5) Peptic ulcer Pancreatic Secreton.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eemx-5sMQJ9JhxAV9i1gPCkBbH_aEuC9j_YCiikymD7cqQ?e=VmKKGM"],
            5: ["link", "(6) Liver Biliary secretion .pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ecoy5RTM6a9IpFMxQfGQi7EBfo19aEDiKAxHgsBCnsJuqA?e=gdMOz2"],
            6: ["link", "(7) Intestinal secretion swallowing.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETNZvsM3HmFLjEtxa24Wb6IBTYCn2-cs-u1YKY_-ZHVHlw?e=oNiues"],
            7: ["link", "(8) Gastric motility.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EdRXcKk8f8pCvkdorpHd5ooBWmnIFRSildgD1ts-wE74QA?e=bbW59r"],
            8: ["link", "(9) Intestnal motility.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVduouQnttFJpqH7xaPsxmQBzJe9lf51PzTdG807f57jBw?e=92NAo7"],
        }
    },
    2: {
        title: "Lectures Metabolism",
        data: {
            0: ["link", "(10) Metabolic rate SDF.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZPNs7FpvvBFubA1-IlMDsoBHYlIdapTFrM1v_sknhJvmw?e=xnDC5D"],
            1: ["link", "(11) RQ Food control.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYqM1vxlvl9ElFQJnUZUli4BaAqAuFI2UeSUamLOJe2iBg?e=MZ7lNI"],
            2: ["link", "(12) Obesity Temperature Regulation.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUcRPl5XeUpMmx7X497xjlABiDQul36x6lfYoM0ojrLISg?e=TFODWZ"],
            3: ["link", "(13) Temperature regulation.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXLbM1mSU2FAtUxar98XLAQB33oh9kjZ5bj2dr9-sVhNJg?e=YqKFBC"],
        }
    },
    3: {
        title: "MCQ",
        data: {
            0: ["link", "MCQ GIT.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ee_SCBJcwKFNvWgUR4YcMUYB15yOrpuV_hokSFf0bBkUAQ?e=z1PFuF"],
            1: ["link", "MCQ GIT [NO_ANSWERS].pdf", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcltslkYauBMqUbcGQMjSXkBuxFVxmUy3juLDPxxOEoKQg?e=c4dzs5"],
            2: ["link", "MCQ kidney.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWyYOvyzPwNAgB5v-Sp66wABC6-qDquy433iPXyRMDuqww?e=vOrYXY"],
            3: ["link", "MCQ kidney [NO_ANSWERS].pdf", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfWnAc1d8XtCqcYaWbJzZfwBtTENfo7ikZKxyzJhfY-jKA?e=z9CT3f"],
            4: ["link", "MCQs Metabolism.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXI2izqsrTVBknPyOgkbfw0Bi_Wz-OB2_cPuq9Euc2BHJQ?e=ub3AdP"],
            5: ["link", "MCQs Metabolism [NO_ANSWERS].pdf", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ES6iZZvgW_xOrewWFJTgI3QB7BpeGVi4HmElaPtKEhnVWg?e=d5FENp"],
        }
    },
    4: {
        title: "Handout",
        data: {
            0: ["link", "GIT 2023 pdf.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EeaFRdmuLBFLmJMSOZyEpjcBHEzOcl8KCL0zbK-6apPxYA?e=lbOXuK"],
            1: ["link", "kidney pdf.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETc4wiroB_1JkCXNniK3zw0BhUmyYt0WAgSXh_NVa16J4g?e=PjBeAN"],
        }
    },
    5: {
        title: "Practical",
        data: {
            0: ["link", "1-GIT-1-Enas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EctCaXMzXTZMsHGyzBapnF0BpilgUdq_m8N0xfqJzPmapw?e=6di4cb"],
            1: ["link", "2-Kidney-function-tests-Enas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EeTBRnI2LIJEqIxevTE1HY0Buf3nB_vzflOu2vMDrhrxhQ?e=E27K48"],
            2: ["link", "3-GIT-cases-Enas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXKrKH9jIwxFn7JpjntE6tkB8pVd44jQs9RbAAUh74-Hfg?e=ZK0gYX"],
            3: ["link", "4-Renal-plasma-clearance-Enas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQNrtSgR7JRAj6KK-lGx5p8BpAaVo2t1fWrfwr6PWIevMw?e=upo6HR"],
            4: ["link", "5-Kidney cases-Enas-1.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EapLSPjUT8pChoI73ykg3WoBig55MRDqOX_DKoRTo26yCg?e=dSvVxU"],
            5: ["link", "6-Metabolism-Enas.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbLePpu9fwlMuPFptAih49YByF1LjwSSguaV0BiYWUU5DQ?e=cH3HxG"],
        }
    },
    6: {
        title: "Revision for written exam (SAQ)",
        data: {
            0: ["link", "Revision GIT Metabolism.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERVNHsW8wJ9EhyfT19XxVDMBzIl6FLm4TYu4IRtI-uD6ng?e=a9LjT2"],
            1: ["link", "Revision Kidney.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUnKi9JarEBMpiwSd0x_RAEBmjuqn8ZgjhPbVKWQPIn1ZA?e=MsTxfz"],
        }
    },
    7: {
        title: "Revision Practical",
        data: {
            0: ["link", "Practical Final Revision.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcyamHSl3RlEgjyVgf92dY8Bo4XY_Votj62nJcc9hIzUqA?e=pFoUNY"],
        }
    }
})
db.set("biochemistry", {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "1 Digestion and absorption lecture.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZLRYOKAZstBpWzd8N_puaUBB3MWQjWgH__nHuYqFEUD_A?e=hehqdc"],
            1: ["link", "2 Fatty liver Lecture.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYtEfIs-u6tIpRVkWIcRDYUBvS8sThQK0mfSmUns9RdVZw?e=KOM0iD"],
            2: ["link", "3 Heme metabolism-Lecture.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXf00wOp2_pPo2NSehAwvTcB0IXYMf0oDLCMr088KmpOPQ?e=H5H5cS"],
            3: ["link", "4 General protein metabolism lecture-1.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQ7cW4rajwNKmoejtP0ObRgBlwnBpjB4IIFzLNiRT7fNHw?e=fSlse8"],
            4: ["link", "5 General protein metabolism lecture- 2.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETeQpeWWbPdDvsM_LO3vwTcBI441ZnEmeC9j3o3Q1_3bdg?e=KVU1qa"],
            5: ["link", "6 General protein metabolism lecture 3.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EROWV39ROxxNrDaeadB_BXMBE3MW8vx8Y_-w1BDQ27ZB9Q?e=WRQphx"],
            6: ["link", "7 Amino acid metabolism lecture 1.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZCPwX3hFoZGqmiM00Q4pyMBZUWZ8_IZakIvrPnlT1RKAQ?e=4Kkohu"],
            7: ["link", "8 amino acids metabolism lectures 2,3,4,5,6.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EefcBaP8D8ZIn-Xjb-XQkVUBofbDYYvjnsPVa3-pCaGTpg?e=dvuVhK"],
        }
    },
    1: {
        title: "Handouts",
        data: {
            0: ["link", "1 Digestion and Absorption handouts.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQW9DIJQEA5Ii1upOwZZysYB8DrpdNA8T7rJuU8I-fHaWw?e=ayJF3T"],
            1: ["link", "2 FATTY LIVER handouts.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EeTIpBrKNdBOrQ76WTRN72ABKzkV9AlyHi0y_6ZO3Bf69w?e=Fgb6lE"],
            2: ["link", "3 Heme metabolism Handouts.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EckfPAJL6ilHntSC5KWWBhMBHU7iYLvnXccYmZuxIS7sNw?e=jGTdKF"],
            3: ["link", "4 General protein metabolism handouts.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX8A_f1_gZhIn_B7Klo-rY0BCEzGmHggqPGoWFIIGLCUtw?e=2BoSF6"],
            4: ["link", "5 Amino Acids Metabolism- handouts.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZV6wDTsMJtJv7yeSLLF1A0BERJHxIP_OO4gQ0mYTrv6dg?e=ohc7My"],
        }
    },
    2: {
        title: "Practical",
        data: {
            0: ["link", "1 LIVER FUNCTION TESTS.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUKJahWvCs1Fu2gaKvRsViABM0M3JVZVxXMGlPI5BJZHyg?e=clep8S"],
            1: ["link", "2 ESTIMATION OF total plasma proteins.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcWsibrrPIBMn_HuNboclmEBmQ9M5L-lry7FsdDFma8Gqw?e=ja5UrA"],
            2: ["link", "3 Kidney function tests.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaGRHj0HmeVKqiLLxNc78P0BmXfANGXHJjVWgh2HiocuBg?e=zWharP"],
            3: ["link", "4 Urine report.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQN0qe14IHxLirNfFulcC-8B3QozOQ2GyBiXGIdgGVIIMQ?e=5hxcfL"],
        }
    },
    3: {
        title: "Revision",
        data: {
            0: ["link", "1 Revision.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESB18Ix920xCr_cgWHi8dD0BlG1Nnj0ToswrtJ-LSFuIeQ?e=A7c7w2"],
            1: ["link", "2 Revision questions on Urea cycle and hyperammonemia.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EdlBsjSSYzJKgV1r6TwNkJ0BQhcOsgR1QXcOKL7hdF6VIw?e=Q7AVbl"]
        }
    }
})
db.set('histology', {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "2- Urinary System Handouts", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZzKjkz7291LutvGG7zaR0EBSiO0DT0zmGANCza_DaAKkQ?e=qZc9vw"],
            1: ["link", "1- Digestive part 1 File", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZ4qbN6h2t5JiL8dnH4IO2QBFNcRxFNZY_S5vhvgDh82-g?e=A6PZMZ"],
            2: ["link", "2- Part II - Digestive Tract Lecture (Fundus of Stomach) -Handout.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWZ4kD_vdp5EtqBNr4H31IQBigqf-mrnchw7S7QZEg9sIA?e=F5gEuK"],
            3: ["link", "3- Part III - Digestive Tract Lecture (Pylorus of Stomach) - Handout ", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESgzzNaTvOdBoWjJMXsXceIBeI8xrwhmI7PbkccKUDe0Mg?e=qGSGl1"],
            4: ["link", "4- Part IV - Digestive tract Revision (Oral cavity, Esophagus, Stomach) - Handout", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVXeNgI6r6hMoGbfVCbyug8BWfCVwNgyGkqBbyOIqtu1AQ?e=pMqEMe"],
            5: ["link", "5- Part V - Digestive Tract Lecture (Small & Large Intestine) - Handout", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbmC6fSDtrVHlbGtpb0fjaEBGwIvRi6R267VvfO52_pUGw?e=uy5erv"],
            6: ["link", "6- UPDATED digestive glands handout.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EW3BS3G-JlFIqiIXYThkc_MBrVLqADs1ddPgmZkLJu9uXw?e=9Az9Rm"],
        }
    },
    1: {
        title: "Practical",
        data: {
            0: ["link", "1- updated Digestive Tract Lab 1 (Oral Cavity) (1)", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWtEy0QRrhROqBCQt96cQC4BLeiv_4RqlwuO6XiLYhNRag?e=xscKoq"],
            1: ["link", "2- Digestive Tract Lab 2 (Esophagus - Fundus)", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXHuZ-8fD5RErUEgBF4Ex0gBrks7-8N_DJZ8aRPzAZX8YA?e=zcOleB"],
            2: ["link", "3- Digestive Tract Lab 3 (Pylorus)", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eexth8waz_pLsUdWPbm-8YsBGqG6JVT153sqkOzsPYIb0w?e=S4i7fe"],
            3: ["link", "4- Lab 1- Urinary System", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETlLniJR8K5Ei49llh9yH0kBVg7gogVst-lM82j5Ej1UPA?e=HxeafO"],
            4: ["link", "5- Urinary System-Lab 2-Renal tubules+JGA+Urinary passages.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfkQSrE9KsVNvZ9zA3fbmykB6QY_Q5ZiDp1Nj3CJRjiigg?e=QRO4Bu"],
            5: ["link", "6- Digestive Tract Lab 4 (Small & Large Intestine)", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWrSbBH5hWxBmuX5z_gDyzkB_ijawE7hcMVDh1KvWTyUsA?e=MMcvIy"],
            6: ["link", "7- Updated -Digestive glands practical.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZKbd3cVrStBlrUh3ET52ycB-sEtsRNCWT6eqqpXSwzYwQ?e=WTKgOZ"],
            7: ["link", "1- Collective OSPE Histology DIG 206.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZW_CMKO3_BLkj7CmahfMQ4BwS87_I4vzg2IAWSnFmYvIQ?e=WXHDwB"],
        }
    },
    2: {
        title: "Revision questions",
        data: {
            0: ["link", "1-URINARY Question bank -LMS", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfaZopyuCcRBs5-SX-60yA4BXzlg_F1q5zVRBpTuM33U8A?e=faQw3x"],
            1: ["link", "1-URINARY Question bank -LMS [NO_ANSWERS]", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ecy4KzKx5FJJpBMkA1ihaXgBMTLT-Os8MMUAYpEG7-iSow?e=E2YN7m"],
            2: ["link", "Digestive tract Question bank - Part I", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaziCZFiTplMsSbrGnujyAsBNxDZuAJmAxIjMJNECUBzTg?e=M22XFm"],
            3: ["link", "Digestive tract Question bank - Part I [NO_ANSWERS]", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ef0QLuHvMRdBnqCADJTRGGUB45a6dex1_4p5M5C-3v9xLw?e=yoBxrd"],
            4: ["link", "4- SAQs-Urinary System.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EV6SyN9Fh8RFpePD4kuEbvgBEgaIITPBdyPXoRNRS0QVTw?e=dX3fNs"],
            5: ["link", "5-Digestive tract Question bank - [Short Questions].pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERGeu2M5f41FvRjvoy8gMZMB8viVJUSp_4a37WC2AU5CwQ?e=icJwgQ"],
            6: ["link", "6-Digestive tract Question bank - Part II.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZmEZe9aYtBMsXXDlOrpGG4BFMQZ0bdaUe3tEBAXKXPD8w?e=VCnAvW"],
            7: ["link", "6-Digestive tract Question bank - Part II [NO_ANSWERS].pdf", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETVSZCSoKp1ErLxcDkr6V_QBiVnX2TESn3DvXSqtKN8X2Q?e=vkLxWc"],
            8: ["link", "10- UPDATED Digestive glands Short Qs.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVV62pCUhX5Pgu1n9HG-QnYBE7SxTJQ5KUF1NTg7hyg2jg?e=t3tUQe"],
            9: ["link", "11-Digestive glands LMS MCQ.pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZgCI2EEINBFqtGD6MtN9awBm40-HVp9TRS7ceAagncpzQ?e=dynz28"],
            10: ["link", "11-Digestive glands LMS MCQ [NO_ANSWERS].pdf", "pdf_extra", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZFgcpB-4-tPrp2wZux5-fkBFGeh1-JEzpq62Kna7weSrQ?e=chuFf4"],
        }
    }
})
db.set("radiology", {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "Radiology lecture 1", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWddlwRbPtFLuWYIFIRzB2ABQR0XsEoGaaT--2zZrvi4bQ?e=XYyvKv"],
            1: ["link", "radiology lecture 2", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYrpJMkCENNAtvAJXrMTTygBHua9Rn_QCLk7KF7yUPG_rQ?e=WSNM4M"],
            2: ["link", "radiology 3", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESVTWlvHamNFtKaWMRv5B0UBmqGbsFfejRTfK4LbyTz69g?e=koYYuv"],
            3: ["link", "radiology lecture 4", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQSsswv7kgdDpa35WwKjhMIBatPcmDJTcvOh8utE1FWALw?e=lhIl6Q"],
        }
    }
})

db.set("epe", {
    0: {
        title: "Week 1 Lectures",
        data: {
            0: ["link", "EPE230 Module Orientation and Recap on Professionalism", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EY1boy_vZ6ZBkZjLUVb6cHMBWAg6Fk15Ws-o8cKWXSnxyw?e=x18FDm"],
            1: ["link", "Symptomatology of Gastrointestinal Tract", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERlQFvsKEO1GsjS21wNM8nEBiF1U1gVtASzJXJ7RymykMQ?e=ApcJEp"],
            2: ["header", "SOAP", null, null],
            3: ["link", "SOAP", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYXDS9KGWi5PvpWLOWaFyDcBS_0oOT-TALsV2C6WN0IvbQ?e=sKcwP0"],
            4: ["link", "SOAP handout", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EdbjfWi8-M1IukocU6UcJUYBEOs7gk0ZQzQZpYIFiDYDTA?e=vN2XIZ"],
        }
    },
    1: {
        title: "Week 2",
        data: {
            0: ["link", "Infection Control Patient Rights in Clinical Practice", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eakn9h3DVzNCrb43tM4sxfkB4c9f-Srx_KIE49PSM4mwWw?e=9lh6an"],
            1: ["link", "Communication Skills in Sensitive Stigmatized Health Topics", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EajLeHFZcohIm9WjP-f1knIBeLG2GFwg-h8qKLOvdQP-xg?e=wmJC6r"],
            2: ["link", "Applied nutrition and hydration in GI health", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EbsUFedk5mtNt49KG_z7bhMBXNBN1E3soxHhsjfFs5lRPw?e=EwXXqj"],
        }
    },
    2: {
        title: "Week 3",
        data: {
            0: ["link", "Diagnostic Tools in Clinical Practice", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ef03FxQEF1JGiNLCPecH-YMB7cg3EeNAVxoatdJCH8JLwQ?e=WUsjNM"],
            1: ["link", "Revsion EPE 1", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYGt_6Y5RjRFm57a_1fqAzMBzqVA9foVsIlNS98gy0VpIQ?e=Da3W2r"],
        }
    },
    3: {
        title: "Week 4",
        data: {
            0: ["link", "Invasive Clinical Procedures Presentation", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EXL__xLyhXpKm5dhQ4JoFhsBRzzvYJv5iS7J-fmmva97iA?e=2ntcSO"],
            1: ["link", "Renal Symptomatology", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERlMA4btTaBCoh0thk7t_sgBPhuk55EFIBOoKkFEoJtt4g?e=gXGJht"],
        }
    },
    4: {
        title: "Week 5",
        data: {
            0: ["link", "Cultural Competence in Clinical Practice", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ebo2hKRoe61LkbWd8-VBjIQBEDYld_d5KlX3VN1N1940kA?e=gMHIjv"],
        }
    },
    5: {
        title: "Week 6",
        data: {
            0: ["link", "Diagnostic Algorithm EPE230", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EQMiVjY2P55BpVn7lhVbmxMBWq-S3rdcMD91rMZ6Ogr0hw?e=BposSh"],
            1: ["link", "Patient Safety in Clinical Skills Procedures", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaLYD5u13hBIsfvgVtmzRwkB2XTapRB8XWsgVYkkmwNjHg?e=Xq9uk6"],
            2: ["link", "Preventive Medicine Screening in GI Renal", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Eaumixrq8XxIhkvI0JLu1IUBuGaRR8rt1U62ZsfvhpHhEA?e=ddrUca"],
            4: ["link", "Epidemiology and Pattern of Disease Occurrence-3", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Edxsw8ZpgDJLrDT54OoYOo8B_A5_D4U3sIB8JgHcABq7-g?e=YVnPYw"],
        }
    },
    6: {
        title: "Week 7",
        data: {
            0: ["link", "palliative and supportive care", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EchP-wj1hXBBj9FtI8xZbEIBZjle0sU79MUuyxzafpyF8Q?e=oQtYAf"],
            1: ["link", "patient advocacy", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERw97urxsulGmBSdsPe3H9gBil7P6Q3yStl4PVey5_Qhng?e=fvtAMf"],
            2: ["link", "Psyco-social care for patients and families", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EVhWFDcBqD9IgcLk38pyKEAB-SxcxopwNjlKtzSnrM6yfg?e=simEWK"],
        }
    },
    7: {
        title: "Week 8",
        data: {
            0: ["link", "Professionalism in assessment and clinical practice", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ed6SBrdTCfFEhEFfGfNIG6wB8ZW7i7GS_p7QUulHahm7vg?e=rnfNIu"],
        }
    },
    8: {
        title: "Clinical Skills Materials",
        data: {
            0: ["header", "History Taking", null, null],
            1: ["link", "For printing: Abdominal History Taking Checklist", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETQZxPZmfE9PpmM7V5GauDoBkHR2v5jWmCfOfWl-RlNBLA?e=pEJefF"],
            2: ["link", "Prelab Presentation: Abdominal History Taking", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERUvxLTyadFFudKcZffpRlUB8sbSqyU4vtZmCpst1Lm-YA?e=q03LdW"],
            3: ["link", "History taking video", "yt", "https://www.youtube.com/watch?si=NNU2kdOkIL7jMO4l&v=Id5WG38qzG4&feature=youtu.be"],
            4: ["header", "Abdominal Examination", null, null],
            5: ["link", "Abdominal Examination Prelab version 2", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EcRVQB0xTYtFmwSCRHCU_p4Bd5Ylla4X7nRATDpZ6gk7-g?e=6Cdebt"],
            6: ["link", "For Printing: Abdominal Examination Checklist", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfiB1iffUmVCsURFBhqtJjsBe2hvA47YRHYvxvz36VgoWw?e=Pe8wVy"],
            7: ["link", "Abdominal Examination Learning Guide", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EUQN144uWQZMhyDe6HpGSe0B49zs7iAbXRTBJCww_QA2NA?e=SBbvon"],
            8: ["link", "Abdominal Examination Prelab version 2", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EZbRwQOzxWZFhbpV5-Zw4l8BeSPQumaxXACZ5H1EfJwvSg?e=4KWWEy"],
            9: ["header", "Catheterization", null, null],
            10: ["link", "Prelab presentation: Catheterization", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYlHo84EvFtOjm5IB01eWRwBcwmOepdummmdKo3DmNEvzQ?e=f7E4TY"],
            11: ["link", "For Printing: Male Catheterization Checklist", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EelBLlNC1zxAl6-2Ab3JfQUB-JpFwbktDU3pW8rC6UQahQ?e=SQ8Abv"],
            12: ["link", "For Printing: Female Catheterization checklist", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/ESCeTiglJrxNrKBr0WhM-BgBr0PlBHGI8g_AWa8fZbfRdQ?e=txtMae"],
            13: ["link", "Female Catheterization learning guide", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYM4j_dobjRFjrh0lZML6C8BmjyGp4Indh0CgX09u-YGTg?e=EbYKdk"],
            14: ["link", "Male Catheterization Learning Guide", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaRu9A2pLhxCgGskhpr-PRABwpoiilthUObUKxGUFG2yVw?e=JKbyUp"],
            15: ["header", "Cases Reflection Sheets", null, null],
            16: ["link", "For Printing: Hernia Patients Reflection Sheet", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EX74Fmuox0FPh2egW3Qd8QwB4bYogDuW2getjIMDloSg2Q?e=LZu1DJ"],
            17: ["header", "Breaking Bad News", null, null],
            18: ["link", "SPIKES Learning guide", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EaBHtDm3uoFAqaEqO2JXjIIBicE2HI0BCLtYVVvnkfWN8A?e=ESTmHH"],
            19: ["link", "Breaking Bad News", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ed8XkmCjBBFCmLDWqN0r08kBMxntLU1Hrk7x7Y5ByThwFQ?e=ahR5lJ"],
            20: ["header", "Case 1", null, null],
            21: ["link", "case study 1 edited 2", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ERE1qads6QJCghQZVP8j1tQBKz2SqswNKF2rqYeo9NYPHg?e=bWkIVU"],
            22: ["link", "video link", "yt", "https://www.youtube.com/watch?si=kfmTCYJVn5_0DcXC&v=jAick61K4Co&feature=youtu.be"],
            23: ["link", "worksheet case study 1", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EfAjYZ_enUJDj6780_Zw_wwBTykeaFPODmspU7fzrgz0UA?e=3plkjp"],
        }
    }
})

db.set('utmb', {
    0: {
        title: "UTIs & Pyelonephritis",
        data: {
            0: ["link", "UTIs (1).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/Ea3Jo9WozIlCvaUWchv_fSABzLOoNWkdEKwDJDmUHjBbHw?e=0y3gQy"],
            1: ["link", "Pyelonephritis (1).pdf", "pdf", "https://badyauni-my.sharepoint.com/:b:/g/personal/m_mohamed2400718_badyauni_edu_eg/EWnF5p49RcpLtBHXGn6YwnQBJrJQxew_YiGkySBZNYY0uQ?e=rIIeND"],
            2: ["link", "UTI_Pyelonephritis_Lecture_GN2.pptx", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ETkqKCJpQxBEnwUFsrT4A8oBrJswQMGhD-KqeXKhw2Xg8Q?e=UQ0F2s"],
        }
    },
    1: {
        title: "Hepatitis, Hepatosplenomegaly, LFTs",
        data: {
            0: ["link", "Hepatitis, Hepatosplenomegaly, LFTs.pptx", "ppt", "https://badyauni-my.sharepoint.com/:p:/g/personal/m_mohamed2400718_badyauni_edu_eg/ET85em7Y_75Ml4zGHNUE6yIBCUOVDNLcF3qvF0G_5SV_lg?e=9oscfD"],
            1: ["link", "Quiz.docx", "docx", "https://badyauni-my.sharepoint.com/:w:/g/personal/m_mohamed2400718_badyauni_edu_eg/EYLVC1_y34pDliN_RAB2g6oBB8rstE7EWpDG8aBjgs1YYw?e=8biUO4"],
        }
    }
})
