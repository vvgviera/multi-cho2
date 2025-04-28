const questions = [
	// Preguntas 1-20 son de business of Medicine
    { //1
        question: "Many coding professionals go on to find work as:",
        options: ["Consultant", "Accountant", "Medical Assistants", "Financial Planning"],
        answer: 0,
    },
    {//2
        question: "Which type of information is NOT maintained in a medical record?",
        options: ["Treatment outcomes", "Observations", "Financial records", "Medical or surgical interventions"],
        answer: 2,
    },
    {//3
		
        question: "Professionals who specialize in coding are called:",
        options: ["Information technologists", "Coding specialists", "Medical Assistants", "Scribes"],
        answer: 1,
    },
	{//4
        question: "EHR stands for:",
    	options: [
        "Electronic health response",
        "Extended health record",
        "Established health record",
        "Electronic health record" ],
    	answer: 3,
    },
    {//5
        question: "What type of provider goes through approximately 26 ½ months of education, after completion of a bachelor's degree, and is licensed to practice medicine with the oversight of a physician?",
    	options: [
        "Nurse Practitioner (NP)",
        "Physical Therapist",
        "Physician Assistant (PA)",
        "Intern"],
    	answer: 2
    },
    {//6
        question: "The Medicare program is made up of several parts. Which part covers provider fees without the use of a private insurer?",
    	options: [
        "Part C",
        "Part B",
        "Part A",
        "Part D" ],
    	answer: 1
    },
	{//7
       question: "The Medicare program is made up of several parts. Which part is affected by the Centers for Medicare & Medicaid Services - Hierarchical Condition Categories (CMS-HCC)?",
    	options: [
        "Part B",
        "Part A",
        "Part C",
        "Part D" ],
    	answer: 2
    },
    {//8
        question: "What does CMS-HCC stand for?",
    	options: [
        "County Mandated Services – Heightened Control Center",
        "Country Mandated Services – Hospital Correct Coding Initiative",
        "Centers for Medicare & Medicaid Services – Hospital Correct Coding Initiative",
        "Centers for Medicare & Medicaid Services – Hierarchical Condition Category"],
    	answer: 3
    },
    {//9
        question: "When coding an operative report, what action would NOT be recommended?",
   		 options: [
        "Coding from the header without reading the body of the report.",
        "Starting with the procedure listed.",
        "Reading the body of the report.",
        "Highlighting unfamiliar words." ],
		answer: 0
    },
	{//10
        question: "Which code books do outpatient coders focus on learning?",
   		options: [
        "CPT®, HCPCS Level II, ICD-10-CM, ICD-10-PCS",
        "CPT®, HCPCS Level II and ICD-10-CM",
        "ICD-10-CM and ICD-10-PCS",
        "CPT® and ICD-10-CM" ],
    	answer: 1
    },
    {//11
        question: "If an NCD does not exist for a particular service/procedure performed on a Medicare patient, who determines coverage?",
    	options: [
        "Current Procedural Terminology (CPT®) guidelines",
        "Centers for Medicare & Medicaid Services (CMS)",
        "The physician providing the service",
        "Medicare Administrative Contractor (MAC)" ],
    	answer: 3
    },
    {//12
        question: "Which CMS product describes whether specific medical items, services, treatment procedures or technologies are considered medically necessary under Medicare?",
    	options: [
        "Medicare Physician Fee Schedule Final Rule",
        "National Coverage Determinations Manual",
        "Relative Value Files",
        "Medicare Claims Processing Manual"],
    answer: 1
    },
	{//13
        question: "What is the purpose of National Coverage Determinations?",
		options: [
        "To notify beneficiaries of noncovered services.",
        "To provide payment options to physicians.",
        "To explain CMS policies on when Medicare will pay for items or services.",
        "To set standards for all payers on coverage items."],
    answer: 2
    },
    {//14
        question: "What does the abbreviation MAC stand for?",
    	options: [
        "Medicare Administrative Contractor.",
        "Medicaid Alert Contractor",
        "Medicare Advisory Contractor",
        "Medicaid Administrative Contractor"],
    answer: 0
    },
	{//15
        question: "Local Coverage Determinations are administered by whom?",
    	options: [
        "NCDs",
        "LMRPs",
        "Each regional MAC",
        "State Law" ],
    answer: 2
    },
    {//16
        question: "LCDs only have jurisdiction in their ____.",
    	options: [
        "Locality",
        "State",
        "Region",
        "District" ],
    answer: 0
    },
   	{//17
        question: "ABN stands for _____.",
    	options: [
        "Admitting Beneficiary Notice",
        "Advisory Beneficial Notice",
        "Advanced Benefits Notification",
        "Advance Beneficiary Notice" ],
    answer: 3
    },
    {//18
        question: "When are providers responsible for obtaining an ABN for a service NOT considered medically necessary?",
    	options: [
        "After providing a service or item to a beneficiary.",
        "Prior to providing a service or item to a beneficiary.",
        "During a procedure or service.",
        "After a denial has been received from Medicare." ],
    answer: 1
    },
    {//19
        question: "HIPAA stands for",
    	options: [
        "Health Insurance Provider Assistance Action",
        "Health Insurance Portability and Accountant Advice",
        "Health Information Privacy Access Act",
        "Health Insurance Portability and Accountability Act" ],
    answer: 3
    },
	{//20
        question: "In what year did HIPAA become law?",
    	options: [
        "1992",
        "1996",
        "1995",
        "1997" ],
    answer: 1
    },		
    {//21		
         question: "A covered entity does NOT include",
    	options: [
        "Patients",
        "Healthcare providers",
        "Clearinghouses",
        "Health plans" ],
    answer: 0
    },
    {//22
        question: "What is the definition of medical coding?",
    	options: [
        "Deciphering explanation of benefits provided by an insurance carrier.",
        "Translating services a provider performs into documentation.",
        "Translating documentation into software compatible notes.",
        "Translating documentation into numerical/alphanumerical codes used to obtain reimbursement." ],
    answer: 3
    },	
    {//23
        question: "What is the definition of medical coding?",
    	options: [
        "OIG",
        "HHS",
        "OCR",
        "CMS" ],
    answer: 2
    },
    {//24
        question: "Healthcare providers are responsible for developing ________ and policies and procedures regarding privacy in their practices.",
    	options: [
        "Patient hotlines",
        "Work around procedures",
        "Fees",
        "Notices of Privacy Practices" ],
    answer: 3
    },	
    {//25
        question: "A covered entity may obtain consent from an individual to use or disclose protected health information to carry out all of the following EXCEPT what?",
    	options: [
        "Treatment",
        "Research",
        "Payment",
        "Healthcare operations"  ],
    answer: 1
    },	
    {//26
        question: "The minimum necessary rule is based on sound current practice that protected health information should NOT be used or disclosed when it is not necessary to satisfy a particular purpose or carry out a function. What does this mean?",
    	options: [
        "Staff members are allowed to access any medical record without restriction.",
        "Practices should only provide minimum necessary information to patients.",
        "Providers should develop safeguards to prevent unauthorized access to protected health information.",
        "All of the above." ],
    answer: 2
    },
    {//27
        question: "The minimum necessary rule applies to",
    	options: [
        "Covered entities taking reasonable steps to limit use or disclosure of PHI",
        "Disclosures to or requests by a health care provider for treatment purposes.",
        "Disclosures to the individual who is the subject of the information.",
        "Uses or disclosures that are required by other law." ],
    answer: 0
    },
	{//28
        question: "HITECH provides a ______ day window during which any violation not due to willful neglect may be corrected without penalty.",
		options: [
        "40",
        "45",
        "60",
        "30" ],
    answer: 3
    },
    {//29
        question: "In what year was HITECH enacted as part of the American Recovery and Reinvestment Act?",
		options: [
        "2009",
        "2007",
        "2010",
        "2000" ],
    answer: 0
    },
    {//30
        question: "Which of the following choices is NOT a benefit of an active compliance plan?",
    	options: [
        "Faster, more accurate payment of claims.",
        "Fewer billing mistakes.",
        "Eliminates risk of an audit.",
        "Increases accuracy of provider documentation." ],
    answer: 2
    },
	{//31
        question: "What will the scope of a compliance program depend on?",
    	options: [
        "The number of insurance carriers the provider is contracted with.",
        "How many patients are seen in the office on a daily basis.",
        "The specific guidelines set forth in the OIG compliance plan.",
        "The size and resources of the provider’s practice." ],
    answer: 3
    },
    {//32
        question: "What will the scope of a compliance program depend on?",
    	options: [
        "Subjective, Objective, Assessment, Plan",
        "Standard, Objective, Activity, Period",
        "Scope, Observation, Action, Plan",
        "Source, Opinion, Advice, Provider" ],
    answer: 0
    },    
	{//33
        question: "According to the OIG, internal monitoring and auditing should be performed by what means?",
    	options: [
        "Focused audits on problems brought to the attention of the compliance officer.",
        "Periodic audits.",
        "Audits on all denied claims.",
        "Baseline audits." ],
    answer: 1
    },
    {//34
        question: "Voluntary compliance programs also provide benefits by not only helping to prevent erroneous or ____, but also by showing that the provider practice is making additional good faith efforts to submit claims appropriately.",
		options: [
        "Duplicative claims",
        "Mistaken principals",
        "Over utilized codes",
        "Fraudulent claims" ],
    answer: 3
    },
    {//35
        question: "How many components are included in an effective compliance plan?",
    	options: [
        "3",
        "7",
        "4",
        "9" ],
    answer: 1
    },
	{//36
        question: "Which statement is TRUE regarding the Merit-Based Incentive Program (MIPS)?",
    	options: [
        "All Medicare providers must participate in MIPS.",
        "Providers with less than 300 Part-B enrolled patients are exempt from MIPS.",
        "Providers are excluded from MIPS if they are enrolled in a Qualifying APM program.",
        "Providers with less than $90,000 in Part C allowed charges for covered professional services are exempted." ],
    answer: 2
    },
    {//37
        question: "What type of insurance is Medicare Part D?",
		options: [
        "A Medicare Advantage program managed by private insurers.",
        "Hospital coverage available to all Medicare beneficiaries.",
        "Provider coverage requiring monthly premiums.",
        "Prescription drug coverage available to all Medicare beneficiaries." ],
    answer: 3
    },
    {//38
        question: "What type of health insurance provides coverage for low-income families?",
    	options: [
        "Medicare",
        "Medicaid",
        "Commercial PPO",
        "Commercial HMO" ],
    answer: 1
    },
	{//39
        question: "What is PHI?",
    	options: [
        "Protected health information",
        "Provider healthcare interchange",
        "Private health insurance",
        "Provider healthcare incident-to" ],
    answer: 0
    },
    {//40
        question: "What form is used to submit a provider’s charge to the insurance carrier?",
    	options: [
        "UB-04",
        "CMS-1500",
        "ABN",
        "Provider reimbursement form" ],
    answer: 1
    },	
    {//41
        question: "Which option below is NOT a covered entity under HIPAA?",
    	options: [
        "Medicare",
        "Medicaid",
        "Workers’ Compensation",
        "BCBS" ],
    answer: 2
    },
	{//42
        question: "Which of the following is a BENEFIT of electronic transactions?",
		options: [
        "Payment of claims",
        "Security of claims",
        "Timely submission of claims",
        "None of the above" ],
    answer: 2
    },
    {//43
        question: "What is the value of a remittance advice?",
    	options: [
        "It states when to schedule the patient’s next appointment.",
        "It confirms the provider is part of the plan in question.",
        "It catalogs the patient’s coverage benefits.",
        "It states what will be paid and why any changes to charges were made." ],
    answer: 3
    },
    {//44
        question: "The OIG recommends that provider practices enforce disciplinary actions through well publicized compliance guidelines to ensure actions that are ______.",
    	options: [
        "Consistent and appropriate",
        "Frequent",
        "Swift and enforceable",
        "Permanent" ],
    answer: 0
    },
	{//45
        question: "The OIG releases a ____ outlining its priorities for the fiscal year ahead and beyond.",
    	options: [
        "Compliance Plan",
        "Self-referral law",
        "CIA yearly review",
        "Work Plan" ],
    answer: 3
    },
    {//46
        question: "Which provider is NOT a mid-level provider?",
		options: [
        "Physician Assistant",
        "Anesthesiologist",
        "Nurse Practitioner",
        "All choices are mid-level providers" ],
    answer: 1
    },
    {//47
        question: "Which of the following is NOT a component of the MIPS program?",
   		options: [
        "Quality",
        "Promoting Interoperability",
        "Readmission Rates",
        "Improvement Activities" ],
    answer: 2
    },
	{//48
        question: "According to the AAPC Code of Ethics, which term is NOT listed as an ethical principle of professional conduct?",
    	options: [
        "Integrity",
        "Responsibility",
        "Commitment",
        "Efficiency" ],
    answer: 3
    },
    {//49
        question: "According to the AAPC Code of Ethics, which term is NOT listed as an ethical principle of professional conduct?",
    	options: [
        "The procedure can be reported from reading the procedure performed header alone.",
        "Additional details about the procedure can be found in the body of the report.",
        "Approximately 50% of the operative report contains words that are not important to the final procedure coding.",
        "When encountering unfamiliar words, ask the performing provider to explain the terminology." ],
    answer: 1
    },
    {//50
        question: "Which of the following is NOT an example of an Advanced Alternative Payment Model (APM)?",
    	options: [
        "Bundled Payments for Home Care Services",
        "Bundled Payments for Care Improvement Advanced",
        "Comprehensive End-Stage Renal Disease Care",
        "Comprehensive Primary Care Plus" ],
    answer: 0
    },
	{//51 Anatomy Review
        question: "Which is NOT a function of the skin?",
		options: [
        "Acts as a gland by synthesizing vitamin A.",
        "Excretes water, salt, and small amounts of waste.",
        "Houses sensory receptors for touch, pressure, pain, and temperature.",
        "Plays an important role in regulation of body temperature." ],
    answer: 0
    },
    {//52
        question: "Which layer is NOT considered part of the skin?",
    	options: [
        "Stratum corneum",
        "Stratum germinativum",
        "Epidermis",
        "Hypodermis" ],
    answer: 3
    },
    {//53
        question: "Which one of the following is TRUE of the stratum germinativum?",
    	options: [
        "It is composed of about 30 layers of dead, flattened, keratinized cells.",
        "It is composed of dense fibrous connective tissue.",
        "It lies on top of the dermis and has access to a rich supply of blood.",
        "It is the surface layer of the epidermis." ],
    answer: 2
    },
	{//54
        question: "Which one of the following best describes psoriasis?",
    	options: [
        "An inflammatory condition characterized by redness pustular and vesicular lesions, crusts, and scales.",
        "A contagious infection of skin generally caused by staphylococcus bacterium.",
        "A chronic condition characterized by red, dry, elevated lesions, covered by silvery scales.",
        "An allergic reaction characterized by wheals and generally accompanied by pruritus." ],
    answer: 2
    },
    {//55
        question: "Muscle is attached to bone by what method?",
    	options: [
        "Tendons, ligaments, and directly to bone",
        "Tendons and cartilage",
        "Tendons, aponeurosis and directly to bone",
        "Ligaments, aponeurosis, and directly to bone" ],
    answer: 2
    },
    {//56
        question: "What is affected by myasthenia gravis?",
		options: [
        "Neuromuscular junction",
        "Muscle belly",
        "Muscle/bone connection",
        "Bone" ],
    answer: 0
    },
	{//57
        question: "Which bone(s) have trochanters?",
    	options: [
        "Humerus",
        "Tibia",
        "Femur",
        "Both A and C" ],
    answer: 2
    },
    {//58
        question: "What is the great toe called?",
		options: [
        "Talus",
        "Hallux",
        "Calcaneus",
        "Metatarsal" ],
    answer: 1
    },
    {//59
        question: "What is a function of the alveoli in the lungs?",
    	options: [
        "Oxygen exchange",
        "Fluid in the lungs absorbed",
        "Nicotine is destroyed",
        "Providing an airway to breathe" ],
    answer: 0
    },
	{//60
        question: "Through which vessel is oxygenated blood returned to the heart from the lungs?",
    	options: [
        "Bronchial artery",
        "Bronchial vein",
        "Pulmonary artery",
        "Pulmonary vein" ],
    answer: 3
    },
    {//61
        question: "Which respiratory structure is comprised of cartilage and ligaments?",
    	options: [
        "Alveoli",
        "Lung",
        "Bronchiole",
        "Trachea" ],
    answer: 3
    },
    {//62
        question: "How many lobes make up the right lung?",
    	options: [
        "one",
        "two",
        "three",
        "four" ],
    answer: 2
    },
	{//63
        question: "What is a myocardial infarction?",
		options: [
        "Overgrowth of muscle tissue, affecting the heart’s ability to pump",
        "Abnormal heart beats causing pain, nausea and discomfort",
        "Lack of oxygen to the heart tissue, resulting in tissue death",
        "Malfunction in one of the valves in the heart, disrupting blood flow" ],
    answer: 2
    },
    {//64
        question: "Which one of the following does NOT circulate fluids throughout the body?",
    	options: [
        "Endocrine system",
        "Venous system",
        "Arterial system",
        "Lymphatic system" ],
    answer: 0
    },
    {//65
        question: "Which one of the following is significant of an abdominal aortic aneurysm?",
    	options: [
        "It is indicative of an underlying heart disorder needing treatment",
        "Pooling blood in an aneurysm can cause clots",
        "It is a weakness in a large artery and rupture can be deadly",
        "The aorta feeds many important organs in the abdomen" ],
    answer: 2
    },
	{//66
        question: "Which chamber of the heart is considered the one working the hardest?",
    	options: [
        "Right atrium",
        "Right ventricle",
        "Left atrium",
        "Left ventricle" ],
    answer: 3
    },
    {//67
        question: "Which best describes constituent components of the human lymphatic system?",
    	options: [
        "Lymph nodes, lymphatic vessels, spleen, thoracic duct",
        "Lymph nodes, lymphatic vessels, tonsils, liver",
        "Lymph nodes, lymphatic vessels, bone marrow, kidneys",
        "Lymph nodes, lymphatic vessels, thymus gland, pancreas" ],
    answer: 0
    },
    {//68
        question: "The term hemic specifically refers to what bodily fluid?",
    	options: [
        "Bile interstitial fluid",
        "Lymph",
        "Blood",
        "Interstitial fluid" ],
    answer: 2
    },
	{//69
        question: "What distinguishes a sentinel node from other lymph nodes?",
		options: [
        "A sentinel node is swollen or diseased",
        "A sentinel node is the first lymph node in a group of nodes to be reached by metastasizing cancer cells",
        "A sentinel node stores white blood cells",
        "A sentinel node contains both afferent and efferent lymph vessels" ],
    answer: 1
    },
    {//70
        question: "The mediastinum contains all of the following except:",
    	options: [
        "Heart",
        "Trachea",
        "Lungs",
        "Thymus" ],
    answer: 2
    },
    {//71
        question: "The term pneumomediastinum describes what condition?",
		options: [
        "Inflammation of the mediastinum",
        "Puncture of the alveoli of the lungs",
        "Presence of a cyst or tumor in the mediastinum",
        "The presence of air in the mediastinum" ],
    answer: 3
    },
	{//72
        question: "Which one of the following is NOT true of the thoracic diaphragm?",
    	options: [
        "It is a frequent site of a Spigelian (lateral ventral) hernia",
        "It separates the thoracic and abdominal cavities",
        "It contracts during inhalation, thus enlarging the thoracic cavity to aid breathing",
        "It contains apertures to allow passage of the esophagus, aorta, and vena cava" ],
    answer: 0
    },
    {//73
        question: "Upon leaving the stomach, nutrients move through the small intestine in what order?",
    	options: [
        "Duodenum, jejunum, ileum.",
        "Duodenum, ileum, jejunum",
        "Jejunum, ileum, duodenum",
        "Jejunum, duodenum, ileum" ],
    answer: 0
    },
    {//74
        question: "Upon leaving the last portion of the small intestine, nutrients move through the large intestine in what order?",
		options: [
        "Cecum, transverse colon, ascending colon, descending colon, sigmoid colon, rectum, anus",
        "Cecum, ascending colon, transverse colon, descending colon, sigmoid colon, rectum, anus",
        "Cecum, ascending colon, transverse colon, sigmoid colon, descending colon, rectum, anus",
        "Cecum, descending colon, transverse colon, ascending colon, sigmoid colon, rectum, anus" ],
    answer: 1
    },
	{//75
        question: "The splenic (left colic) flexure lies in the upper left quadrant, between what two portions of the large intestine?",
    	options: [
        "The cecum and ascending colon",
        "The descending and sigmoid colon",
        "The transverse and descending colon",
        "The ascending and transverse colon" ],
    answer: 2
    },
    {//76
        question: "In order, starting with the innermost layer, what are the four walls of the digestive tract?",
    	options: [
        "Muscle, submucosa, mucosa, serosa",
        "Mucosa, submucosa, serosa, muscle",
        "Mucosa, submucosa, muscle, serosa",
        "Serosa, mucosa, submucosa, muscle" ],
    answer: 2
    },
    {//77
        question: "Urine is transported from the kidneys to the urinary bladder by which structure?",
		options: [
        "Urethra",
        "Ureter",
        "Kidney pelvis",
        "Urinary vein" ],
    answer: 1
    },
	{//78
        question: "The loop of Henle is located in which structure?",
		options: [
        "Bladder",
        "Kidney",
        "Urethra",
        "Prostate" ],
    answer: 1
    },
    {//79
        question: "What is the Bowman’s capsule?",
    	options: [
        "A basin collecting urine made by the kidneys",
        "Cup-like edges of the renal pelvis",
        "C-shaped structure partially surrounding the glomerulus",
        "Peritubular capsules surrounding the renal tube" ],
    answer: 2
    },
    {//80
        question: "The structure of the male anatomy carrying sperm out of the epididymis is called:",
    	options: [
        "Vas deferens",
        "Seminal vesicles",
        "Tunica vaginalis",
        "Testicles" ],
    answer: 0
    },
	{//81
        question: "What is the function of the Cowper’s glands?",
    	options: [
        "Produces sperm food",
        "Delivers spermatozoa to the urethra",
        "Promotes maturation of the egg",
        "Helps lubricate the urethra" ],
    answer: 3
    },
    {//82
        question: "A part of the male genital system sitting below the urinary bladder and surrounding the urethra is called the:",
    	options: [
        "Testis",
        "Scrotum",
        "Prostate",
        "Epididymis" ],
    answer: 2
    },
    {//83
        question: "What is endometriosis?",
    	options: [
        "Inflammation of the endometrium",
        "When the endometrial tissue grows outside of the uterus",
        "When the endometrium sloughs during menses",
        "Disintegration of the endometrium" ],
    answer: 1
    },
	{//84
        question: "If a woman has a Pap smear performed by her gynecologist, what part of the female anatomy is involved?",
    	options: [
        "Cervix",
        "Corpus uteri",
        "Endometrium",
        "Fallopian tube" ],
    answer: 0
    },
    {//85
        question: "The corpus luteum secretes progesterone. What is an effect of this secretion?",
    	options: [
        "Enlargement and development of the organs of the female reproductive system",
        "Deposition of fat beneath the skin",
        "Closure of the epiphyseal discs in long bones",
        "Thickens the endometrium for implantation and is necessary to sustain pregnancy" ],
    answer: 3
    },
    {//86
        question: "An ectopic pregnancy is a complication in which the fertilized ovum is implanted in any tissue other than the ____.",
		options: [
        "Ampulla",
        "Ovary",
        "Fimbria",
        "Uterine wall" ],
    answer: 3
    },
	{//87
        question: "What is vernix caseosa?",
    	options: [
        "When the mother first feels the fetus move",
        "The fine, downy hair covering the fetus",
        "A white cheese like substance covering the fetus and newborn.",
        "A spontaneous abortion" ],
    answer: 2
    },
    {//88
        question: "The term episiotomy is what type of procedure?",
    	options: [
        "An incision made in the perineum to enlarge the passage for the fetus during delivery",
        "A procedure to initiate cervical ripening prior to labor",
        "Surgical removal of an oviduct",
        "Removal of lining from the cervix" ],
    answer: 0
    },
    {//89
        question: "Which gland is located on the superior surface of the kidney?",
    	options: [
        "Pineal gland",
        "Pituitary gland",
        "Parathyroid gland",
        "Adrenal gland" ],
    answer: 3
    },
	{//90
        question: "What is the function of the thyroid gland?",
    	options: [
        "It secretes hormones regulating body metabolism and blood calcium",
        "It secretes hormones regulating the secretion of insulin and hemoglobin",
        "It secretes hormones regulating mood and growth hormones",
        "It secretes hormones regulating the immune system and blood calcium" ],
    answer: 0
    },
    {//91
        question: "Which cells produce hormones to regulate blood sugar?",
		options: [
        "Eosinophils",
        "Pancreatic islets",
        "Hemoglobin",
        "Target cells"  ],
    answer: 1
    },
    {//92
        question: "Which part of the brain controls blood pressure, heart rate and respiration?",
    	options: [
        "Cortex",
        "Cerebrum",
        "Cerebellum",
        "Medulla" ],
    answer: 3
    },
	
    {//93
        question: "What are chemicals which relay, amplify and modulate signals between a neuron and another cell?",
    	options: [
        "Neurotransmitters",
        "Hormones",
        "Interneurons",
        "Myelin" ],
    answer: 0
    },
    {//94
        question: "Which condition results from an injury to the head? The symptoms include headache, dizziness and vomiting.",
    	options: [
        "Meningitis",
        "Parkinson’s disease",
        "Concussion",
        "Epilepsy" ],
    answer: 2
    },
	{//95
        question: "Lacrimal glands are responsible for which of the following?",
    	options: [
        "Production of tears",
        "Production of zonules",
        "Production of vitreous",
        "Production of mydriatic agents" ],
    answer: 0
    },
    {//96
        question: "Which does NOT contribute to refraction in the eye?",
    	options: [
        "Aqueous",
        "Macula",
        "Cornea",
        "Lens" ],
    answer: 1
    },
    {//97
        question: "A patient diagnosed with glaucoma has:",
    	options: [
        "A lens that is no longer clear",
        "Bleeding vessels on the retina",
        "Abnormally high intraocular pressure",
        "Corneal neovascularization" ],
    answer: 2
    },
    {//98
        question: "Which one of the following is TRUE about the tympanic membrane?",
    	options: [
        "It separates the middle ear from the inner ear",
        "It separates the external ear from the middle ear",
        "It sits within the middle ear",
        "It sits within the inner ear" ],
    answer: 1
    },
	
	{//99
        question: "Which one of the following is TRUE about the function of the cochlea?",
    	options: [
        "It helps with balance and sound transmission",
        "It helps with balance only",
        "It transmits sound only",
        "Its function is to excrete cerumen (wax) to help keep the ear clean" ],
    answer: 2
    },
	
	{//100
        question: "Which of the following are auditory ossicles?",
    	options: [
        "Incus and pinna",
        "Stapes and mastoid",
        "Tragus and malleus",
        "Stapes and incus" ],
    answer: 3
    },
	
	//Medical Terminology
	
	{//101 
        question: "A surgeon performs an escharotomy. This procedure is best described as:",
    	options: [
        "Incision into a burn in order to lessen its pull on the surrounding tissue.",
        "Removal of a basal cell carcinoma",
        "Debridement of a pressure ulcer",
        "Removal of a fingernail" ],
    answer: 0
    },
	
	{//102
        question: "Where would a subungual hematoma be located?",
    	options: [
        "Mouth – under the tongue",
        "Under the toenail/fingernail",
        "Scalp",
        "Bottom of the foot" ],
    answer: 1
    },
	
	{//103
        question: "Impetigo is best described as:",
		options: [
        "A dry, scaly condition of the skin",
        "A bacterial skin infection",
        "Severe itching",
        "Acute eruption of vesicles along the path of a nerve" ],
    answer: 1
    },
	
	{//104
        question: "Pronation is turning the hand to have the palm face:",
    	options: [
        "Upward",
        "Sideways",
        "Downward",
        "Outward" ],
    answer: 2
    },
	
	{//105
        question: "Which of the following characterizes the disorder dystonia?",
    	options: [
        "Difficulty swallowing",
        "Abnormal muscle tone causing abnormal postures and muscle spasm",
        "Impairment of speech",
        "Slowness of motion" ],
    answer: 1
    },
	
	{//106
        question: "Arthritis is an inflammation of what?",
    	options: [
        "Muscle",
        "Nerve",
        "Joint",
        "Tendon" ],
    answer: 2
    },
	
	{//107
        question: "The dome-shaped muscle under the lungs flattening during inspiration is the:",
    	options: [
        "Bronchus",
        "Diaphragm",
        "Mediastinum",
        "Pleura" ],
    answer: 1
    },
	
	{//108
        question: "A respiratory disease characterized by overexpansion and destruction of the alveoli is identified as:",
    	options: [
        "Cystic fibrosis",
        "Pneumoconiosis",
        "Emphysema",
        "Respiratory distress syndrome" ],
    answer: 2
    },
	
	{//109
        question: "The word describing the presence of blood in the pleural cavity is:",
    	options: [
        "Hemothorax",
        "Hydrothorax",
        "Hemoptysis",
        "Pleural effusion" ],
    answer: 0
    },
	
	{//110
        question: "A thin membrane lining the chambers of the heart and valves is called the:",
    	options: [
        "Myocardium",
        "Endocardium",
        "Pericardium",
        "Epicardium" ],
    answer: 1
    },
	
	{//111
        question: "A procedure widening a narrowed vessel or obstructed blood vessel is called a(n):",
		options: [
        "Valvotomy",
        "Angiography",
        "Angioplasty",
        "Thrombectomy" ],
    answer: 2
    },
	
	{//112
        question: "Restriction of blood supply, commonly due to factors in the blood vessel, that can result in damage or dysfunction of tissue is known as:",
		options: [
        "Ischemia",
        "Heart failure",
        "Fibrillation",
        "Dyslipidemia" ],
    answer: 0
    },
	
	{//113
        question: "Splenorrhaphy is:",
    	options: [
        "Dissection of the spleen",
        "Suturing a wound of the spleen",
        "Hemorrhage of the spleen",
        "Softening of the spleen" ],
    answer: 1
    },
	
	{//114
        question: "A deficiency of cells in the blood is defined as:",
    	options: [
        "Erythremia",
        "Phagocytosis",
        "Cytopenia",
        "Bacteremia" ],
    answer: 2
    },
	
	{//115
        question: "Bone marrow harvesting is a procedure to obtain bone marrow from a donor. Bone marrow collected from a close relative is:",
    	options: [
        "Autologous",
        "Allogenic",
        "Autoinfusion",
        "Alloplasty" ],
    answer: 1
    },
	
	{//116
         question: "Which procedure visualizes the contents of the mediastinum?",
    	options: [
        "Mediastinoscopy",
        "Mediastinotomy",
        "Median rhinoscopy",
        "Medialization" ],
    answer: 0
    },
	
	{//117
        question: "The operative overlapping of tissue to repair a defect in the diaphragm is called:",
		options: [
        "Imbrication",
        "Immobilization",
        "Immersion",
        "Immunodiffusion" ],
    answer: 0
    },
	
	{//118
        question: "The root word for mouth is:",
    	options: [
        "Gloss/o",
        "Bucc/o",
        "Stomat/o",
        "Dent/o" ],
    answer: 2
    },
	
	{//119
        question: "A surgical procedure creating an opening into the jejunum is defined as a:",
    	options: [
        "Colostomy",
        "Gastrojejunostomy",
        "Gastroenterostomy",
        "Jejunostomy"  ],
    answer: 3
    },
	
	{//120
        question: "Inflammation of the membrane lining the abdominal cavity and covering the abdominal organs is called:",
    	options: [
        "Peritonitis",
        "Ulcerative colitis",
        "Diverticulosis",
        "Diverticulitis" ],
    answer: 0
    },
	
	{//121
        question: "Excessive potassium in the blood is referred to as:",
    	options: [
        "Hematuria",
        "Hyperkalemia",
        "Hypoproteinemia",
        "Hypernatremia" ],
    answer: 1
    },
	
	{//122
        question: "A medical treatment used to remove the waste products in the blood is:",
    	options: [
        "Hemophilia",
        "Hemodialysis",
        "Hemapheresis",
        "Hemochromatosis" ],
    answer: 1
    },
	
	{//123
        question: "A patient is diagnosed with inflammation of the testis and epididymis. The medical term for this condition is:",
    	options: [
        "Orchialgia",
        "Epididymitis",
        "Vesiculitis",
        "Orchiepididymitis" ],
    answer: 3
    },
	
	{//124
        question: "What condition results from failure of the testis to descend into the scrotum?",
    	options: [
        "Epididymitis",
        "Cryptorchidism",
        "Orchitis",
        "Priapism" ],
    answer: 1
    },
	
	{//125
        question: "A vesiculotomy is defined as:",
    	options: [
        "Removal of an obstruction from the vas deferens",
        "Surgical cutting into the seminal vesicles",
        "Removal of one of the seminal vesicles",
        "Incision into the prostate" ],
    answer: 1
    },
	
	{//126
        question: "A Bartholin’s gland cyst may be treated by marsupialization. This treatment is described as:",
    	options: [
        "Removal of the Bartholin’s cyst",
        "Injection of the Bartholin’s gland",
        "Create an opening to the gland and suture the cut edges to form a pouch",
        "Removal of the Bartholin’s gland" ],
    answer: 2
    },
	
	{//127
        question: "Destruction of lesions of the vulva can be done with cryosurgery. This method uses:",
    	options: [
        "Chemicals",
        "Extreme cold",
        "Laser",
        "Heat conduction" ],
    answer: 1
    },
	
	{//128
        question: "What term describes a woman in her first pregnancy?",
		options: [
        "Primigravida",
        "Primipara",
        "Nulligravida",
        "Parturition"  ],
    answer: 0
    },
	
	{//129
        question: "A form of milk produced the first few days after giving birth is:",
		options: [
        "Chorion",
        "Lactose",
        "Colostrum",
        "Prolactin" ],
    answer: 2
    },
	
	{//130
        question: "Melasma is defined as:",
    	options: [
        "Brownish pigmentation appearing on the face",
        "A dark vertical line appearing on the abdomen",
        "A discharge of mucus and blood",
        "Lines where the skin has been stretched" ],
    answer: 0
    },
	
	{//131
        question: "A condition where the thyroid is overactive is called:",
    	options: [
        "Thyrotoxicosis",
        "Ketosis",
        "Panhypopituitarism",
        "Thyroiditis" ],
    answer: 0
    },
	
	{//132
        question: "The root for pertaining to pancreatic islet cells is:",
    	options: [
        "Cyt/o",
        "Insul/o",
        "Pancreat/o",
        "Endocrin/o" ],
    answer: 1
    },
	
	{//133
        question: "Adrenomegaly is defined as:",
    	options: [
        "Any disease of the adrenal gland",
        "A tumor of the adrenal gland",
        "Enlargement of the adrenal gland",
        "Infection of the adrenal gland" ],
    answer: 2
    },
	
	{//134
        question: "Select the term that is for destruction of a nerve or nervous tissue:",
		options: [
        "Neuroglioma",
        "Neuralgia",
        "Neurolysis",
        "Neuropathy" ],
    answer: 2
    },
	
	{//135
        question: "The term for a shaking or involuntary movement is:",
    	options: [
        "Tremor",
        "Convulsion",
        "Epilepsy",
        "Seizure" ],
    answer: 0
    },
	
	{//136
        question: "A meningioma is defined as:",
    	options: [
        "Tumor of the meninges",
        "Inflammation of the membranes of the spinal cord",
        "A protrusion of the brain or spinal cord",
        "Hemorrhage into the cerebral or spinal meninges" ],
    answer: 0
    },
	
	{//137
        question: "The meaning of the root myring/o is:",
    	options: [
        "Eustachian tube",
        "Labyrinth",
        "Tympanic membrane",
        "Cochlea" ],
    answer: 2
    },
	
	{//138
        question: "What is the Rinne test?",
    	options: [
        "Test using music as the focal point",
        "Test for hearing loss using a vibrating tuning fork placed at the center of the head",
        "Test using a two-syllable word with equal stress on each syllable",
        "Test measuring hearing using bone conduction and air conduction" ],
    answer: 3
    },
	
	
	{//139
        question: "The term for pain in the ear is:",
		options: [
        "Arthralgia",
        "Otalgia",
        "Neuralgia",
        "Myalgia" ],
    answer: 1
    },
	
	
	{//140
        question: "A dacryocystectomy is an:",
		options: [
        "Excision of the lacrimal sac",
        "Excision of the sclera",
        "Excision of the cornea",
        "Excision of the pupil" ],
    answer: 0
    },
	
	{//141
        question: "The meaning of the root blephar/o is:",
    	options: [
        "Choroid",
        "Sclera",
        "Eyelid",
        "Uvea" ],
    answer: 2
    },
	
	
	{//142
        question: "The meaning of heteropsia (or anisometropia) is:",
    	options: [
        "Blindness in half the visual field",
        "Double vision",
        "Unequal vision in the two eyes",
        "Blindness in both eyes" ],
    answer: 2
    },
	
	
	{//143
        question: "The radiology term fluoroscopy is a(n):",
    	options: [
        "Technique using magnetism, radio waves and a computer to produce images",
        "X-ray procedure allowing the visualization of internal organs in motion",
        "Scan using an X-ray beam rotating around the patient",
        "Use of high-frequency sound waves to image anatomic structures" ],
    answer: 1
    },
	
	
	{//144
        question: "Sialography is an X-ray of the:",
		options: [
        "Sinuses",
        "Liver",
        "Salivary glands",
        "Ventricles of the brain" ],
    answer: 2
    },
	
	
	{//145
        question: "A projection is the path of the X-ray beam. If the projection is front to back it would be:",
    	options: [
        "Lateral",
        "Recumbent",
        "Decubitus",
        "Anteroposterior" ],
    answer: 3
    },
	
	
	{//146
        question: "Cytopathology is the study of:",
   		options: [
        "Tissue",
        "Cells",
        "Blood",
        "Organs" ],
    answer: 1
    },
	
	
	{//147
        question: "The process of preserving cells or whole tissues at extremely low temperatures is known as:",
    	options: [
        "Cryotherapy",
        "Cryopexy",
        "Cryalgesia",
        "Cryopreservation" ],
    answer: 3
    },
	
	
	{//148
        question: "A gonioscopy is an examination of what part of the eye:",
    	options: [
        "Anterior chamber of the eye",
        "Interior surface of the eye",
        "Lacrimal duct",
        "Posterior segment" ],
    answer: 0
    },
	
	
	{//149
        question: "A diagnostic tool in sleep medicine is:",
		options: [
        "Electroencephalography",
        "Polysomnography",
        "Electromyography",
        "Electrocorticography" ],
    answer: 1
    },
	
	
	{//150
        question: "Intrathecal injection is administered into the:",
    	options: [
        "Dermis and epidermis",
        "Muscle",
        "Vein",
        "Subarachnoid space" ],
    answer: 3
    },
	
	//Introduction to ICD-10-CM
	
	{//151
        question: "What are NEC and NOS considered in the ICD-10-CM code book?",
		options: [
        "Abbreviations",
        "Eponyms",
        "Essential modifiers",
        "Qualifiers" ],
    answer: 0
    },
	
	
	{//152
         question: "Who are the parties responsible for providing the ICD-10-CM guidelines?",
		options: [
        "AAPC and AMA",
        "AMA and CMS",
        "NCHS and CMS",
        "WHO and CMS" ],
    answer: 2
    },
	
	
	{//153
        question: "What type of code is assigned when the provider documents the reason for a patient seeking healthcare services that is not for an injury or disease?",
    	options: [
        "External cause code (V00-Y99)",
        "ICD-10-PCS code",
        "Non-specific code",
        "Z code (Z00-Z99)" ],
    answer: 3
    },
	
	
	{//154
        question: "In the ICD-10-CM Alphabetic Index what is the code next to the main term called?",
		options: [
        "Category Code",
        "Subcategory Code",
        "Default Code",
        "Unspecified Code" ],
    answer: 2
    },
	
	
	{//155
        question: "What does ICD-10-CM stand for?",
    	options: [
        "International Code Diagnosis-10, Coding Medical",
        "International Class Diagnosis 10th Book, Clinical Medicine",
        "Infections Classified Diseases 10th Revision, Clinical Modification",
        "International Classification of Diseases 10th Revision, Clinical Modification" ],
    answer: 3
    },
	
	
	{//156
        question: "What section of the ICD-10-CM guidelines contains instructions on how to code for a patient receiving diagnostic services only in an outpatient setting?",
    	options: [
        "Section I",
        "Section II",
        "Section III",
        "Section IV" ],
    answer: 2
    },
	
	
	{//157
        question: "What is an example of an eponym?",
    	options: [
        "Neuropathy",
        "Paget’s disease",
        "Salpingo-oophoritis",
        "Xanthoma" ],
    answer: 1
    },
	
	
	{//158
        question: "The terms malignant, benign, in situ and uncertain behavior are all terms used when coding what?",
    	options: [
        "Lumps",
        "Neoplasms",
        "Seeds",
        "Skin rashes" ],
    answer: 1
    },
	
	
	{//159
        uestion: "What is the meaning of 'provider' in the ICD-10-CM guidelines?",
    	options: [
        "The hospital",
        "The physician",
        "Insurance company",
        "The patient" ],
    answer: 1
    },
	
	
	{//160
        question: "What month does the new ICD-10-CM code book take effect each year?",
		options: [
        "January",
        "March",
        "October",
        "December" ],
    answer: 2
    },
	
	{//161
        question: "What does ICD-10-CM guideline I.B.1 state to use when locating and assigning a diagnosis code?",
    	options: [
        "ICD-10-CM Alphabetic Index and Illustrations",
        "ICD-10-CM Alphabetic Index and Tabular List",
        "ICD-10-CM code book and Dictionary",
        "Tabular List and Index to Procedures" ],
    answer: 1
    },
	
	{//162
        question: "Which of the following statements is TRUE in reference to reporting body mass index (BMI) codes?",
		options: [
        "BMI codes should be reported as primary codes only.",
        "BMI codes should be reported as a secondary code only.",
        "BMI codes should never be reported in ICD-10-CM.",
        "BMI codes are only reported with the ICD-10-CM code E66.3 for overweight." ],
    answer: 1
    },
	
	{//163
        question: "What do the instructions and conventions of the classification take precedence over?",
    	options: [
        "Documentation",
        "Official Coding Guidelines",
        "CPT®",
        "Nothing. They are only used in the event of no other instruction." ],
    answer: 1
    },
	
	{//164
        question: "What should the word AND be interpreted to mean when it appears in a title?",
		options: [
        "And or or – patient may have either or both",
        "And – patient must have both",
        "Instead of",
        "Do not use" ],
    answer: 0
    },
	
	{//165
        question: "When a patient has a condition that is both acute and chronic and there are separate entries for both, how is it reported?",
    	options: [
        "Code only the acute code",
        "Code both sequencing the chronic first",
        "Code both sequencing the acute first",
        "Code only the chronic code" ],
    answer: 2
    },
	
	{//166
        question: "A 6-year-old patient is seen in the office for acute otitis media, coded as H66.90. This is an example of what ICD-10-CM convention?",
		options: [
        "Category",
        "Etiology/manifestation code",
        "NEC",
        "NOS" ],
    answer: 3
    },
	
	{//167
        question: "The diagnosis caudal cervical inflammatory spondylopathy is assigned ICD-10-CM code M46.82 and is an example of what ICD-10-CM coding convention?",
		options: [
        "Etiology/manifestation",
        "NEC",
        "NOS",
        "Unspecified" ],
    answer: 1
    },
	
	{//168
        question: "According to the Tabular List in the ICD-10-CM code book, category code H80 Otosclerosis, includes what other disorder?",
    	options: [
        "Otopathy",
        "Otorrhea",
        "Otospongiosis",
        "Tinnitus" ],
    answer: 2
    },
	
	{//169
        question: "Which diagnosis code(s) below reports pain in the left and right ears?",
    	options: [
        "H92.01, H92.02",
        "H92.09",
        "H92.03",
        "H93.8X3" ],
    answer: 0
    },
	
	{//170
        question: "When referencing the Tabular List, which code contains an instructional note that indicates that two related conditions cannot occur together?",
    	options: [
        "A18.01",
        "N94.2",
        "K31.84",
        "S04.0-" ],
    answer: 1
    },
	
	{//171
        question: "Using the ICD-10-CM Alphabetic Index, which main term below has an instructional note indicating another main term may also be referenced that may provide additional Alphabetic Index entries that may be useful?",
		options: [
        "Appendicitis",
        "Diabetes",
        "Symptoms",
        "Fibrosarcoma" ],
    answer: 2
    },
	
	{//172
        question: "In the ICD-10-CM Alphabetic Index next to Hypertension, what do the terms in parentheses indicate?",
    	options: [
        "Hypertension cannot be coded unless one of those words is documented with hypertension in the diagnosis.",
        "Hypertension needs two codes assigned.",
        "Supplementary words that can be present or absent with the diagnosis hypertension and does not affect the code to which it is assigned.",
        "Look at another main term to find that type of hypertension." ],
    answer: 2
    },
	
	{//173
        question: "What is the sequencing order when coding a sequela (late effect)?",
		options: [
        "The cause of the late effect is coded first and the residual condition is coded second.",
        "The symptom is coded first followed by the residual condition and the late effect code.",
        "The cause of the late effect is coded first; the residual condition is coded second followed by the symptoms.",
        "The residual condition is coded first, and the code(s) for the cause of the late effect are coded as secondary."  ],
    answer: 3
    },
	
	{//174
        question: "Which diagnosis code(s) should be reported for chronic gonococcal salpingitis?",
    	options: [
        "N70.11, A54.24",
        "N70.11",
        "N70.91, A54.24",
        "A54.24" ],
    answer: 0
    },
	
	{//175
        question: "Which diagnosis below would be considered a combination code?",
    	options: [
        "E06.0",
        "I07.0",
        "K80.00",
        "R78.0" ],
    answer: 2
    },
	
	{//176
       question: "What is the ICD-10-CM code for keloid scar on the foot?",
    	options: [
        "L91.0",
        "Q81.0",
        "M35.4",
        "I51.89" ],
    answer: 0
    },
	
	{//177
        question: "What is the ICD-10-CM code for swine flu?",
    	options: [
        "A08.4",
        "J11.1",
        "J09.X2",
        "J10.1" ],
    answer: 2
    },
	
	{//178
        question: "What is the ICD-10-CM code for UTI?",
		options: [
        "A54.00",
        "N71.9",
        "T80.29XA",
        "N39.0" ],
    answer: 3
    },
	
	{//179
        qquestion: "What do brackets [ ] indicate in the ICD-10-CM Alphabetic Index?",
    	options: [
        "Use the code(s) in brackets first.",
        "Use the code(s) in brackets as the only code.",
        "Do not assign the code in brackets.",
        "Use the code(s) in brackets in addition to the disease or condition to identify an associated manifestation." ],
    answer: 3
    },
	
	{//180
        question: "When coding for an ambulatory surgical procedure, how is the diagnosis determined?",
    	options: [
        "Code the preoperative diagnosis because it is the most definitive.",
        "Code the preoperative diagnosis and postoperative diagnosis if the diagnoses are different.",
        "Code the postoperative diagnosis because it is the most definitive.",
        "Z codes are always reported for ambulatory surgery." ],
    answer: 2
    },
	
	{//181
        question: "What diagnosis code(s) should be reported for acute and chronic cystitis?",
		options: [
        "N30.00",
        "N30.00, N30.20",
        "N30.20",
        "N30.80" ],
    answer: 1
    },
	
	{//182
        question: "What is the ICD-10-CM code for headache?",
    	options: [
        "R51.9",
        "G44.001",
        "G44.009",
        "G44.209" ],
    answer: 0
    },
	
	{//183
        question: "What is the ICD-10-CM code for nausea?",
    	options: [
        "R11.11",
        "R11.2",
        "R11.0",
        "T75.3XXA" ],
    answer: 2
    },
	
	{//184
        question: "What is the ICD-10-CM code for heartburn?",
    	options: [
        "R12",
        "F45.8",
        "R07.9",
        "R06.89" ],
    answer: 0
    },
	
	{//185
        question: "What is the ICD-10-CM code for chest pain?",
   		options: [
        "G89.29",
        "R07.9",
        "N64.4",
        "R07.82" ],
    answer: 1
    },
	
	{//186
        question: "What is the ICD-10-CM code for low back pain?",
    	options: [
        "M54.89",
        "M54.50",
        "F45.42",
        "R52" ],
    answer: 1
    },
	
	{//187
        question: "What is the ICD-10-CM code for sore throat?",
    	options: [
        "R07.0",
        "J02.9",
        "J02.0",
        "J31.2" ],
    answer: 1
    },
	
	{//188
        question: "What is the ICD-10-CM code for tachycardia?",
    	options: [
        "I47.9",
        "P29.11",
        "I49.8",
        "R00.0" ],
    answer: 0
    },
	
	{//189
        question: "What is the ICD-10-CM code for fatigue?",
    	options: [
        "F48.8",
        "F45.8",
        "R29.898",
        "R53.83" ],
    answer: 3
    },
	
	{//190
        question: "What is the ICD-10-CM code for hives?",
    	options: [
        "L50.9",
        "T78.40XA",
        "L29.9",
        "L29.89" ],
    answer: 0
    },
	
	{//191
        question: "What is the ICD-10-CM code for cough?",
    	options: [
        "J41.0",
        "B37.89",
        "J11.1",
        "R05.9" ],
    answer: 3
    },
	
	{//192
        question: "What is the ICD-10-CM code for classical migraine?",
    	options: [
        "G43.119",
        "G43.509",
        "G43.109",
        "G43.909" ],
    answer: 2
    },
	
	{//193
        question: "What is the ICD-10-CM code for strep throat?",
    	options: [
        "J02.8",
        "J02.0",
        "B97.89",
        "A49.1" ],
    answer: 1
    },
	
	{//194
        question: "What is the ICD-10-CM code for hay fever?",
		options: [
        "J45.909",
        "J30.89",
        "J30.1",
        "J30.81" ],
    answer: 2
    },
	
	{//195
        question: "What is the ICD-10-CM code for eyestrain?",
    	options: [
        "H53.10",
        "H53.10, H53.10",
        "H57.813",
        "H57.811, H57.812" ],
    answer: 0
    },
	
	{//196
        question: "A 10-month-old comes into the pediatrician’s office for a harsh, bark-like cough. She is diagnosed with croup. The mother also wants the pediatrician to look at a rash that has developed on her leg. The pediatrician prescribes over the counter medication of acetaminophen for the croup and hydrocortisone cream for the rash on the leg. She is to follow up in five days or return earlier if the conditions worsen. What ICD-10-CM code(s) should be reported for this visit?",
		options: [
        "R21",
        "J05.0",
        "J05.0, R05.9, R21",
        "J05.0, R21" ],
    answer: 3
    },
	
	{//197
        question: "A patient presents to the Emergency Department with nausea and vomiting, abdominal pain, and fever. The provider suspects appendicitis. The test results are pending. What ICD-10-CM code(s) is/are reported?",
		options: [
        "R11.2, R10.9, R50.9",
        "K37",
        "R11.2, R10.9, R50.9, K37",
        "R11.0, R11.10, R10.9, R50.9" ],
    answer: 0
    },
	
	{//198
        question: "A 20-year-old comes into the emergency department (ED) with symptoms of a severe headache, vomiting, stiff neck, and fever. The ED physician suspects meningitis and performs a lumbar puncture. The ED physician reviews the results and the patient is admitted in the hospital for meningitis which is suspected to be bacterial. Which ICD-10-CM code(s) is/are reported by the ED physician? ",
		options: [
        "G03.9, R51.9, R11.10, M43.6, R50.9",
        "G00.9",
        "G03.9",
        "G00.9, R51.9, R11.10, M43.6, R50.9" ],
    answer: 1
    },
	
	{//199
        question: "What diagnosis code(s) is/are reported for agitated and violent behavioral disturbances in a patient with early onset Alzheimer’s?",
    	options: [
        "G30.8, F02.818",
        "G30.0, F02.811",
        "F02.811, G30.0",
        "F02.818" ],
    answer: 1
    },
	
	{//200
        question: "What diagnosis codes should be reported for spastic cerebral palsy due to previous illness of meningitis?",
    	options: [
        "G03.9, G80.1",
        "G80.1, G09",
        "G09, G80.1",
        "G80.1, G43.909, G03.9" ],
    answer: 2
    },
	
	{//201
         question: "What diagnosis codes should be reported for a patient with polyneuropathy as a result of vitamin B deficiency?",
		options: [
        "G63, E53.9",
        "G62.9, E53.9",
        "E53.9, G63",
        "E53.9, G62.9" ],
    answer: 2
    },
	
	{//202
        question: "A 32-year-old sees her obstetrician about a lump in the lower outer quadrant of the right breast. Her mother and aunt both have a history of breast cancer. What diagnosis code(s) should be reported?",
		options: [
        "N63.13, Z85.3",
        "N63.23",
        "N63.23, Z15.01",
        "N63.13, Z80.3" ],
    answer: 3
    },
	
	{//203
        question: "What diagnosis coding is reported for pneumonia due to severe acute respiratory syndrome (SARS)?",
    	options: [
        "J12.81",
        "J12.81, B97.21",
        "J18.9",
        "J18.9, B97.21" ],
    answer: 1
    },
	
	{//204
        question: "A 45-year-old female with malignant Müllerian duct cancer is receiving her first treatment of chemotherapy. What diagnosis codes are reported?",
    	options: [
        "Z51.11, C57.7",
        "C79.82, Z51.11",
        "Z51.11, D28.7",
        "C57.7, Z51.11" ],
    answer: 3
    },
	
	{//205
         question: "A patient sees his primary care provider for chest pain and regurgitation. The provider’s diagnosis for the patient is gastroesophageal reflux. What diagnosis code(s) should be reported?",
    	options: [
        "R07.9, R11.10, K21.9",
        "K21.9, R07.9, K21.9",
        "R07.9, R11.10",
        "K21.9" ],
    answer: 3
    },
	
	{//206
        question: "A 22-year-old is in an outpatient facility for an inguinal hernia repair. Just before surgery, the surgeon discovers the patient is positive for Methicillin-resistant Staphylococcus aureus (MRSA) and the surgery is canceled. Which ICD-10-CM code(s) should be reported for the outpatient service?",
		options: [
        "A49.02",
        "A49.01, K40.90, Z53.09",
        "Z53.09",
        "K40.90, A49.02, Z53.09" ],
    answer: 3
    },
	
	{//207
        question: "A 50-year-old female presents to her provider with symptoms of insomnia and upset stomach. The provider suspects she is premenopausal. She is diagnosed with impending menopause. What diagnosis code(s) should be reported?",
    	options: [
        "G47.00, K30",
        "N95.9",
        "N95.9, G47.00, K30",
        "E28.319" ],
    answer: 1
    },
	
	{//208
        question: "What diagnosis codes should be reported for fragilitas ossium, osteogenesis imperfecta and osteopsathyrosis?",
    	options: [
        "Q78.2",
        "Q78.0",
        "Q78.8",
        "Q78.9" ],
    answer: 1
	},
	
	{//209
        question: "What is the diagnosis code(s) for a patient with bronchitis and the flu?",
    	options: [
        "J40, J11.1",
        "J09.X2",
        "J11.1",
        "J40, J09.X2" ],
    answer: 0
    },
	
	{//210
        question: "What diagnosis code(s) should be reported for primary osteoarthritis in both knees?",
    	options: [
        "M17.0, M17.0",
        "M17.4",
        "M17.0",
        "M17.11, M17.12" ],
    answer: 2
    },
	
	{//211
        question: "A 32-year-old male is in a diagnostic center to have an ultrasound of his neck due to difficulty swallowing. The patient’s father had esophageal cancer. What is/are the appropriate code(s) to report for the diagnostic service?",
    	options: [
        "R13.10, Z80.0",
        "Z80.0",
        "Z80.0, R13.10",
        "R13.10, Z85.01" ],
    answer: 0
    },
	
	{//212
        question: "A 65-year-old is seen by her cardiologist for preoperative evaluation for clearance for removal of her gallbladder due to gallstones. The cardiologist notes that she has hypertension. Medication is given to control her hypertension. What diagnosis codes are reported?",
    	options: [
        "Z01.810, K80.21, I10",
        "I10, K80.20, Z01.810",
        "Z01.810, K80.20, I10",
        "K80.20, I10, Z01.810" ],
    answer: 2
    },
	
	{//213
        question: "A patient was seen in the provider’s office and diagnosed with influenza with pneumonia. The provider selected J18.9. Refer to the Tabular List to verify code J18.9. Is it correct to report code J18.9? Why?",
		options: [
        "No, there is a combination code J11.00 that includes influenza with pneumonia.",
        "No, the influenza code, J11.1 also needs to be reported on the claim.",
        "Yes, code J18.9 is a combination code assigned to influenza with pneumonia.",
        "Yes, because the provider selected J18.9, it must be reported." ],
    answer: 1
    },
	
	{//214
        question: "A 37-year-old male is diagnosed with cholelithiasis, choledocholithiasis and acute and chronic cholecystitis. What ICD-10-CM code(s) is/are reported?",
		options: [
        "K80.20, K80.70, K80.66",
        "K80.66",
        "K80.62, K80.66",
        "K80.20, K80.70, K80.62, K80.60" ],
    answer: 1
    },
	
	{//215
        question: "What is the ICD-10-CM code for a laceration on the left shoulder, subsequent encounter?",
		options: [
        "S46.001D",
        "S41.012D",
        "S51.801D",
        "S51.009D" ],
    answer: 1
    },
	
	{//216
        question: "What is the ICD-10-CM code for sprained left ankle, initial encounter?",
		options: [
        "S73.192D",
        "S83.90XD",
        "S93.601A",
        "S93.402A" ],
    answer: 3    
    },
	
	{//217
        question: "What is the ICD-10-CM code for an initial encounter for a closed fracture of the right wrist?",
    	options: [
        "M80.031A",
        "S62.101A",
        "S62.102A",
        "S12.9XXA" ],
    answer: 2
    },
	
	{//218
        question: "What ICD-10-CM code(s) is/are reported for enlargement of the prostate with a symptom of urinary retention?",
    	options: [
        "N40.1, R33.8",
        "N40.1",
        "N40.0",
        "N40.3, R33.8" ],
    answer: 0
    },
	
	{//219
        question: "A patient is seen in the ED for severe abdominal pain and urinary frequency. After examination and urinalysis, the patient is diagnosed with a urinary tract infection (UTI). What ICD-10-CM code(s) is/are reported?",
		options: [
        "R10.0, R35.0",
        "R10.0, R35.0, N39.0",
        "R10.0, N39.0",
        "N39.0" ],
    answer: 3		   
	},
	
	{//220
        question: "A 30-year-old female patient was seen in the ED with complaints of diarrhea for the past four days. She was also complaining of lower abdominal pain. After examination, the patient was diagnosed with viral gastroenteritis. She was instructed to drink plenty of fluids and to begin eating solids only after the diarrhea has subsided. What diagnosis code(s) would be reported for this encounter?",
    	options: [
        "A08.4, R10.84, R19.7",
        "R10.31, R19.7",
        "A08.4",
        "K52.9" ],
    answer: 0
    },
	
	{//221
        question: "The patient is a 12-month-old male with a history of muscle weakness. Unfortunately, his etiology is unknown and to help delineate the diagnosis, Neurology consulted us to obtain a right bicep muscle biopsy. What diagnosis code is reported?",
		options: [
        "R53.1",
        "R29.898",
        "M62.81",
        "G58.9" ],
    answer: 2
    },
	
	{//222
        question: "A patient with a history of bilateral otitis media is not responsive to medical therapy. Given the history and physical examination, the provider felt he was a candidate for bilateral myringotomy and tubes. The patient went to the ambulatory surgical center (ASC) for the procedure. The provider’s findings were bilateral chronic serous otitis media. What diagnosis code is reported?",
    	options: [
        "H66.93",
        "H65.22",
        "H65.21",
        "H65.23" ],
    answer: 3
    },
	
	{//223
        question: "In the ED, a 50-year-old male complains of severe bloating and stomach cramps, some nausea, vomiting, and diarrhea for the past four months. In the last three weeks, he has had pain in middle right side of his back which radiates around his rib cage as well as stomach gurgling with massive pain. After examination, the provider determines he has irritable bowel syndrome with diarrhea. What diagnosis code(s) is/are reported?",
    	options: [
        "K58.0",
        "K58.9, R11.12, R10.9, R11.2, R19.7",
        "R11.10, R10.9, R11.2, R19.7",
        "R11.11, R10.9, R11.2, R11.12" ],
    answer: 0
    },
	
	{//224
        question: "A male patient with convulsions is sent for a computerized axial tomogram (CT scan) of the brain with contrast. What diagnosis code is reported as the reason for the CT Scan?",
    	options: [
        "R51.9",
        "R56.9",
        "R56.00",
        "R56.01" ],
    answer: 1
    },
	
	{//225
        question: "The provider orders the following serum blood tests as part of a pre-employment physical exam: Complete Blood Count (CBC) automated and automated differential White Blood Count (WBC) count, Comprehensive Metabolic Panel (CMP), and a Thyroid Stimulating Hormone (TSH) assay, which are all part of the general health panel. A drug screen for multiple drug classes was also collected. What diagnosis code is reported?",
		options: [
        "R68.89",
        "Z00.01",
        "R71.0",
        "Z02.1" ],
    answer: 3
    },
	
	//ICD-10-CM Chapters 1-11
	
	{//226
        question: "When a patient has a blood test for HIV that is inconclusive, what ICD-10-CM code is assigned?",
		options: [
        "Z21",
        "R75",
        "B20",
        "Z11.4" ],
    answer: 1
    },
	
	{//227
        question: "What does MRSA stand for?",
    	options: [
        "Methicillin Resistant Staphylococcus Aureus",
        "Methicillin Resistant Streptococcus Aureus",
        "Moderate Resistance Susceptible Aureus",
        "Mild Resistance Streptococcus Aureus" ],
    answer: 0
    },
	
	{//228
        question: "What does the 4th character in diabetes mellitus diabetes codes indicate?",
    	options: [
        "The condition as controlled or uncontrolled.",
        "Any complication associated with diabetes.",
        "Type of diabetes (type 1, type 2, secondary).",
        "If the diabetes is primary or secondary diabetes." ],
    answer: 1
    },
	
	{//229
        question: "When do you code acute respiratory failure as a secondary diagnosis?",
		options: [
        "The patient has any other condition at the same time.",
        "When it is determined to be the cause of the shortness of breath.",
        "Acute respiratory failure is always listed first.",
        "When it occurs after admission." ],
    answer: 3
    },
	
	{//230
        question: "When the type of diabetes mellitus is not documented in the medical note, what is used as the default type?",
    	options: [
        "Type 2",
        "Type 1",
        "Can be type 1 or 2",
        "Secondary diabetes" ],
    answer: 0
    },
	
	{//231
        question: "When is it appropriate to use history of malignancy from category Z85?",
    	options: [
        "Once the malignancy is removed from that site but the patient is still receiving chemotherapy.",
        "When the patient cancels treatment for that site.",
        "It has been excised, no evidence of any existing primary malignancy, and there is no further treatment directed to the site.",
        "When five years has passed after surgery." ],
    answer: 2
    },
	
	{//232
         question: "If a diabetic patient uses insulin, and the type of diabetes is not documented, what type of diabetes would be coded according to ICD-10-CM guidelines?",
    	options: [
        "Secondary diabetes",
        "The use of insulin does not specify that a patient is a certain type of diabetes",
        "Type 1",
        "Type 2" ],
    answer: 3
    },
	
	{//233
        question: "What ICD-10-CM code is reported for pneumonia due to adenovirus?",
    	options: [
        "B34.0",
        "J12.0",
        "B97.0",
        "B30.1" ],
    answer: 1
    },
	
	{//234
        question: "What is the correct ICD-10-CM code for a 50-year-old patient who has been diagnosed with elevated blood pressure but does not have a history of hypertension?",
    	options: [
        "R03.0",
        "I10",
        "I13.0",
        "I15.0" ],
    answer: 0
    },
	
	{//235
        question: "What is the ICD-10-CM code for a patient with postoperative anemia due to acute blood loss during the surgery who needs a blood transfusion?",
		options: [
        "D50.0",
        "D62",
        "D64.9",
        "D53.0" ],
    answer: 1
    },
];

const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitBtn");
const resultModal = document.getElementById("resultModal");
const closeModal = document.getElementById("closeModal");
const modalText = document.getElementById("modalText");

// Mezcla las preguntas y selecciona las primeras 100
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(questions);
const limitedQuestions = questions.slice(0, 100); // Toma solo las primeras 100 preguntas

// Genera el cuestionario
function generateQuiz() {
    limitedQuestions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";

        const p = document.createElement("p");
        p.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(p);

        q.options.forEach((option, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(div);
    });
}

generateQuiz();

// Evalúa el cuestionario y muestra resultados en el modal
submitBtn.addEventListener("click", () => {
    let score = 0;
    limitedQuestions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (userAnswer && parseInt(userAnswer.value) === q.answer) {
            score++;
        }
    });
    modalText.textContent = `Tu puntuación: ${score}/${limitedQuestions.length}`;
    resultModal.style.display = "block"; // Muestra el modal
});

// Cierra el modal
closeModal.addEventListener("click", () => {
    resultModal.style.display = "none";
});

function limpiarRadios() {
            // Obtenemos todos los elementos tipo radio del formulario
            const radios = document.querySelectorAll('input[type="radio"]');
            
            // Recorremos y desmarcamos cada radio
            radios.forEach(radio => radio.checked = false);
	
	// Volver al inicio de la página
            window.scrollTo(0, 0);
        }

