export interface DataGroup {
    title: string;
    data: {
        [key: number]: [
            "link" | "header", 
            string, 
            "pdf" | "ppt" | "docx" | "yt" | null, 
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
            1: ["link", "1- Anterior Abdominal Wall.pdf", "pdf", null],
            2: ["link", "2- Inguinal Canal (2025-2026).pdf", "pdf", null],
            3: ["link", "3- Anterior abd. wall nerves and vessels.pdf", "pdf", null],
            4: ["link", "anterior abd. wall muscles.pdf", "pdf", null],
            5: ["header", "W2", null, null],
            6: ["link", "1- Male external genitalia.pdf", "pdf", null],
            7: ["link", "2- Regions of abdomen.pdf", "pdf", null],
            8: ["link", "3- Peritoneum.pdf", "pdf", null],
            9: ["link", "4- Stomach and Duodenum.ppt", "ppt", null],
            10: ["link", "5- Small and large Intestine.pdf", "pdf", null],
            11: ["link", "Duodenum.pdf", "pdf", null],
            12: ["link", "large intestine final.pdf", "pdf", null],
            13: ["link", "Large intestine.pdf", "pdf", null],
            14: ["link", "Peritoneum part 1 (2).pdf", "pdf", null],
            15: ["link", "Peritoneum part 2.pdf", "pdf", null],
            16: ["link", "Small Intestine.pdf", "pdf", null],
            17: ["link", "Stomach.pdf", "pdf", null],
            18: ["header", "W3", null, null],
            19: ["link", "Kidney.pdf", "pdf", null],
            20: ["link", "liver and biliary system.pdf", "pdf", null],
            21: ["header", "W4", null, null],
            22: ["link", "Blood Supply of the Gut I and II.pdf", "pdf", null],
            23: ["link", "Portal Vein and Portosystemic anastomoses.pdf", "pdf", null],
            24: ["header", "W5", null, null],
            25: ["link", "1- Pancrese,GB,spleen.ppt", "ppt", null],
            26: ["link", "2- Posterior abdominal wall (Muscles).pdf", "pdf", null],
            27: ["link", "3- Vessels of posterior abdominal wall.pdf", "pdf", null],
            28: ["link", "4- Lymphatic drainage and Nerves of Posterior abdominal wall.pdf", "pdf", null],
            29: ["header", "W6", null, null],
            30: ["link", "1- Development of Esophagus Stomach.pdf", "pdf", null],
            31: ["link", "2- Development of Duodenum, Liver GB.pdf", "pdf", null],
            32: ["link", "3- Development of Pancreas.pdf", "pdf", null],
            33: ["link", "4- Development of Midgut.pdf", "pdf", null],
            34: ["link", "5- Development of Hindgut.pdf", "pdf", null],
            35: ["header", "W7", null, null],
        }
    },
    1: {
        title: "Practical",
        data: {
            0: ["link", "1- Muscles of anterior abdominal wall.pdf", "pdf", null],
            1: ["link", "2- Male Genital System.pdf", "pdf", null],
            2: ["link", "3- Abdominal cavity Practical.pdf", "pdf", null],
            3: ["link", "4- Stomach, intestine.pdf", "pdf", null],
            4: ["link", "5- Liver, Spleen practical.pdf", "pdf", null],
            5: ["link", "6- Post. abdominal wall [Muscles, Vessels, nerves] Kidney.pdf", "pdf", null],
            6: ["link", "checklist for section 1 [anterior Abdominal Wall].docx", "docx", null],
            7: ["link", "checklist for section 2 [Male Genital System].docx", "docx", null],
            8: ["link", "checklist for section 3 [Abdominal Cavity].docx", "docx", null],
            9: ["link", "checklist for section 4 [Stomach, Small Large intestine].docx", "docx", null],
            10: ["link", "checklist for section 5 [Liver, Spleen].docx", "docx", null],
            11: ["link", "checklist for section 6 [posterior abdominal wall muscles, vessels, nerves, Kidney ureter.docx", "docx", null],
        }
    },
    2: {
        title: "Handout",
        data: {
            0: ["link", "1- Anterior Abdominal Wall.pdf", "pdf", null],
            1: ["link", "2- Male External Genital System.pdf", "pdf", null],
            2: ["link", "3- Abdominal Cavity (Planes and Regions).pdf", "pdf", null],
            3: ["link", "4- Peritoneum.pdf", "pdf", null],
            4: ["link", "5- Stomach.pdf", "pdf", null],
            5: ["link", "6- Small Intestine.pdf", "pdf", null],
            6: ["link", "7- Large Intestine.pdf", "pdf", null],
            7: ["link", "8- Liver and Biliary System.pdf", "pdf", null],
            8: ["link", "9- Kidney, Suprarenal G Ureter.pdf", "pdf", null],
            9: ["link", "10- Arteries of the Gut Portal circulation.pdf", "pdf", null],
            10: ["link", "11- Pancrease.pdf", "pdf", null],
            11: ["link", "12- Spleen.pdf", "pdf", null],
            12: ["link", "13- Posterior Abdominal Wall.pdf", "pdf", null],
            13: ["link", "14- Development of For, Mid and Hindgut.pdf", "pdf", null],
        }
    },
    3: {
        title: "Assessment",
        data: {
            0: ["link", "Assessment 1 (206).doc", "docx", null]
        }
    }
})

db.set('physiology', {
    0: {
        title: "Lectures kidney", 
        data: {
            0: ["link", "(1) introduction.pdf", "pdf", null],
            1: ["link", "(2) GFR.pdf", "pdf", null],
            2: ["link", "(3) GFR Control.pdf", "pdf", null],
            3: ["link", "(4) Na reabsorption.pdf", "pdf", null],
            4: ["link", "(5) Na regulation.pdf", "pdf", null],
            5: ["link", "(6) Glucose reabsorption.pdf", "pdf", null],
            6: ["link", "(7) Water reabsorption.pdf", "pdf", null],
            7: ["link", "(8) Concentrated Urine.pdf", "pdf", null],
            8: ["link", "(9) Hydrogen Secretion.pdf", "pdf", null],
            9: ["link", "(10) Plasma Clearance.pdf", "pdf", null],
            10: ["link", "(10) Summary Plasma Clearance.pdf", "pdf", null],
            11: ["link", "(11) Acid-Base Balance.pdf", "pdf", null],
            12: ["link", "(12) Micturtion.pdf", "pdf", null],
        }
    },
    1: {
        title: "Lectures GIT",
        data: {
            0: ["link", "(1) Nervous regulation of Dgestive system.pdf", "pdf", null],
            1: ["link", "(2) Hormonal regulation of Dgestive system .pdf", "pdf", null],
            2: ["link", "(3) Salivary secretion.pdf", "pdf", null],
            3: ["link", "(4) Gastric Secretion .pdf", "pdf", null],
            4: ["link", "(5) Peptic ulcer Pancreatic Secreton.pdf", "pdf", null],
            5: ["link", "(6) Liver Biliary secretion .pdf", "pdf", null],
            6: ["link", "(7) Intestinal secretion swallowing.pdf", "pdf", null],
            7: ["link", "(8) Gastric motility.pdf", "pdf", null],
            8: ["link", "(9) Intestnal motility.pdf", "pdf", null],
        }
    },
    2: {
        title: "Lectures Metabolism",
        data: {
            0: ["link", "(10) Metabolic rate SDF.pdf", "pdf", null],
            1: ["link", "(11) RQ Food control.pdf", "pdf", null],
            2: ["link", "(12) Obesity Temperature Regulation.pdf", "pdf", null],
            3: ["link", "(13) Temperature regulation.pdf", "pdf", null],
        }
    },
    3: {
        title: "MCQ",
        data: {
            0: ["link", "MCQ GIT.pdf", "pdf", null],
            1: ["link", "MCQ kidney.pdf", "pdf", null],
            2: ["link", "MCQs Metabolism.pdf", "pdf", null],
        }
    },
    4: {
        title: "Handout",
        data: {
            0: ["link", "GIT 2023 pdf.pdf", "pdf", null],
            1: ["link", "kidney pdf.pdf", "pdf", null],
        }
    },
    5: {
        title: "Practical",
        data: {
            0: ["link", "1-GIT-1-Enas.pdf", "pdf", null],
            1: ["link", "2-Kidney-function-tests-Enas.pdf", "pdf", null],
            2: ["link", "3-GIT-cases-Enas.pdf", "pdf", null],
            3: ["link", "4-Renal-plasma-clearance-Enas.pdf", "pdf", null],
            4: ["link", "5-Kidney cases-Enas-1.pdf", "pdf", null],
            5: ["link", "6-Metabolism-Enas.pdf", "pdf", null],
        }
    }
})
db.set("biochemistry", {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "1 Digestion and absorption lecture.pdf", "pdf", null],
            1: ["link", "2 Fatty liver Lecture.pdf", "pdf", null],
            2: ["link", "3 Heme metabolism-Lecture.pdf", "pdf", null],
            3: ["link", "4 General protein metabolism lecture-1.pdf", "pdf", null],
            4: ["link", "5 General protein metabolism lecture- 2.pdf", "pdf", null],
            5: ["link", "6 General protein metabolism lecture 3.pdf", "pdf", null],
            6: ["link", "7 Amino acid metabolism lecture 1.pdf", "pdf", null],
            7: ["link", "8 amino acids metabolism lectures 2,3,4,5,6.pdf", "pdf", null],
        }
    },
    1: {
        title: "Handouts",
        data: {
            0: ["link", "1 Digestion and Absorption handouts.pdf", "pdf", null],
            1: ["link", "2 FATTY LIVER handouts.pdf", "pdf", null],
            2: ["link", "3 Heme metabolism Handouts.pdf", "pdf", null],
            3: ["link", "4 General protein metabolism handouts.pdf", "pdf", null],
            4: ["link", "5 Amino Acids Metabolism- handouts.pdf", "pdf", null],
        }
    },
    2: {
        title: "Practical",
        data: {
            0: ["link", "1 LIVER FUNCTION TESTS.pdf", "pdf", null],
            1: ["link", "2 ESTIMATION OF total plasma proteins.pdf", "pdf", null],
            2: ["link", "3 Kidney function tests.pdf", "pdf", null],
            3: ["link", "4 Urine report.pdf", "pdf", null],
        }
    },
    3: {
        title: "Revision",
        data: {
            0: ["link", "1 Revision.pdf", "pdf", null],
            1: ["link", "2 Revision questions on Urea cycle and hyperammonemia.pdf", "pdf", null]
        }
    }
})
db.set('histology', {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "2- Urinary System Handouts", "pdf", null],
            1: ["link", "1- Digestive part 1 File", "pdf", null],
            2: ["link", "2- Part II- Digestive Tract Lecture (Fundus of Stomach) -Handout.pdf", "pdf", null],
            3: ["link", "3- Part III- Digestive Tract Lecture (Pylorus of Stomach) - Handout ", "pdf", null],
            4: ["link", "4- PartIV Digestive tract Revision (Oral cavity, Esophagus, Stomach) - Handout", "pdf", null],
            5: ["link", "5- Part V- Digestive Tract Lecture (Small & Large Intestine) - Handout", "pdf", null],
            6: ["link", "6-Digestive glands handout.pdf ", "pdf", null],
        }
    },
    1: {
        title: "Practical",
        data: {
            0: ["link", "1- updated Digestive Tract Lab 1 (Oral Cavity) (1)", "pdf", null],
            1: ["link", "2- Digestive Tract Lab 2 (Esophagus - Fundus)", "pdf", null],
            2: ["link", "3- Digestive Tract Lab 3 (Pylorus)", "pdf", null],
            3: ["link", "4- Lab 1- Urinary System", "pdf", null],
            4: ["link", "5- Urinary System-Lab 2-Renal tubules+JGA+Urinary passages.pdf", "pdf", null],
            5: ["link", "6- Digestive Tract Lab 4 (Small & Large Intestine)", "pdf", null],
            6: ["link", "7- Updated -Digestive glands practical.pdf", "pdf", null],
        }
    },
    2: {
        title: "Revision questions",
        data: {
            0: ["link", "1-URINARY Question bank -LMS", "pdf", null],
            1: ["link", "Digestive tract Question bank - Part I", "pdf", null],
            2: ["link", "4- SAQs-Urinary System.pdf", "pdf", null],
            3: ["link", "5-Digestive tract Question bank - [Short Questions].pdf", "pdf", null],
            4: ["link", "6-Digestive tract Question bank - Part II.pdf", "pdf", null],
            5: ["link", "10-Digestive glands Short Qs.pdf", "pdf", null],
            6: ["link", "11-Digestive glands LMS MCQ.pdf", "pdf", null],
        }
    }
})
db.set("radiology", {
    0: {
        title: "Lectures",
        data: {
            0: ["link", "Radiology lecture 1", "pdf", null],
            1: ["link", "radiology lecture 2", "ppt", null],
            2: ["link", "radiology 3", "ppt", null],
            3: ["link", "radiology lecture 4", "ppt", null],
        }
    }
})

db.set("epe", {
    0: {
        title: "Week 1 Lectures",
        data: {
            0: ["link", "EPE230 Module Orientation and Recap on Professionalism", "ppt", null],
            1: ["link", "Symptomatology of Gastrointestinal Tract ", "pdf", null],
            2: ["header", "SOAP", null, null],
            3: ["link", "SOAP", "ppt", null],
            4: ["link", "SOAP handout", "pdf", null],
        }
    },
    1: {
        title: "Week 2",
        data: {
            0: ["link", "Infection Control Patient Rights in Clinical Practice", "ppt", null],
            1: ["link", "Communication Skills in Sensitive Stigmatized Health Topics", "ppt", null],
            2: ["link", "Applied nutrition and hydration in GI health", "ppt", null],
        }
    },
    2: {
        title: "Week 3",
        data: {
            0: ["link", "Diagnostic Tools in Clinical Practice", "ppt", null],
            1: ["link", "Revsion EPE 1", "ppt", null],
        }
    },
    3: {
        title: "Week 4",
        data: {
            0: ["link", "Invasive Clinical Procedures Presentation", "ppt", null],
            1: ["link", "Renal Symptomatology", "ppt", null],
        }
    },
    4: {
        title: "Week 5",
        data: {
            0: ["link", "Cultural Competence in Clinical Practice", "ppt", null],
        }
    },
    5: {
        title: "Week 6",
        data: {
            0: ["link", "Diagnostic Algorithm EPE230", "ppt", null],
            1: ["link", "Patient Safety in Clinical Skills Procedures", "ppt", null],
            2: ["link", "Preventive Medicine Screening in GI Renal", "ppt", null],
            4: ["link", "Epidemiology and Pattern of Disease Occurrence-3", "ppt", null],
        }
    },
    6: {
        title: "Week 7",
        data: {
            0: ["link", "palliative and supportive care", "ppt", null],
            1: ["link", "patient advocacy", "ppt", null],
            2: ["link", "Psyco-social care for patients and families", "ppt", null],
        }
    },
    7: {
        title: "Week 8",
        data: {
            0: ["link", "Professionalism in assessment and clinical practice", "ppt", null],
        }
    },
    8: {
        title: "Clinical Skills Materials",
        data: {
            0: ["header", "History Taking", null, null],
            1: ["link", "For printing: Abdominal History Taking Checklist", "docx", null],
            2: ["link", "Prelab Presentation: Abdominal History Taking", "ppt", null],
            3: ["link", "History taking video", "yt", null],
            4: ["header", "Abdominal Examination", null, null],
            5: ["link", "Abdominal Examination Prelab version 2", "pdf", null],
            6: ["link", "For Printing: Abdominal Examination Checklist", "docx", null],
            7: ["link", "Abdominal Examination Learning Guide", "docx", null],
            8: ["link", "Abdominal Examination Prelab version 2", "ppt", null],
            9: ["header", "Catheterization", null, null],
            10: ["link", "Prelab presentation: Catheterization", "ppt", null],
            11: ["link", "For Printing: Male Catheterization Checklist", "docx", null],
            12: ["link", "For Printing: Female Catheterization checklist", "docx", null],
            13: ["link", "Female Catheterization learning guide", "docx", null],
            14: ["link", "Male Catheterization Learning Guide", "docx", null],
            15: ["header", "Cases Reflection Sheets", null, null],
            16: ["link", "For Printing: Hernia Patients Reflection Sheet", "docx", null],
            17: ["header", "Breaking Bad News", null, null],
            18: ["link", "SPIKES Learning guide", "docx", null],
            19: ["link", "Breaking Bad News", "ppt", null],
            20: ["header", "Case 1", null, null],
            21: ["link", "case study 1 edited 2", "ppt", null],
            22: ["link", "video link", "yt", null],
            23: ["link", "worksheet case study 1", "docx", null],
        }
    }
})


