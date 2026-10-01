const QUESTIONS = [
  {
    "id": 1,
    "question": "ຈຸດພິເສດສະເພາະຂອງ virus:",
    "choices": [
      { "text": "ບໍ່ມີໂຄງສ້າງຈຸລັງ" },
      { "text": "ມີຂະໜາດສຸດທີ່ນ້ອຍ" },
      { "text": "ແຜ່ພັນ ແຕກກະຈາຍ" },
      { "text": "ກາຝາກໃນຈຸລັງໂດຍບັງຄັບ" }
    ],
    "answer": "C"
  },
  {
    "id": 2,
    "question": "ເວລາ ຄົ້ນຄ້ວາ ຄວາມສາມາດ ພຸມຄຸ້ມກັນ ຂອງ ຮ່າງກາຍ ສັດ ຕົ້ນຕໍເຂົາເຈົ້າອິງໃສ່ ປັດໃຈໃດ?",
    "choices": [
      { "text": "ທາງເຂົ້າ ຂອງ ປັດໃຈຕ້ານ(antigen) ເຂົ້າໃນຮ່າງກາຍ" },
      { "text": "ຄຸນລັກສະນະ ຂອງ ປັດໃຈຕ້ານ(antigen)" },
      { "text": "ຄວາມສາມາດຕ້ານທານຂອງ ຮ່າງກາຍ" },
      { "text": "ອາຍຸ ຂອງ ເຈົ້າຕົວທີ່ຖຶກສັກຢາ" }
    ],
    "answer": "C"
  },
  {
    "id": 3,
    "question": "Interferon ເປັນກາຍຍະຕ້ານ(antibody)ສະເພາະຂ້າເຊື້ອ virus.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "B"
  },
  {
    "id": 4,
    "question": "ກາຍະຕ້ານໃດ ເຮັດບົດບາດຕົ້ນຕໍຢູ່ໃນ ການຕອບຮັບພຸມຄຸ້ມກັນ ຄັ້ງໃໝ່?",
    "choices": [
      { "text": "IgM" },
      { "text": "IgA" },
      { "text": "IgG" },
      { "text": "IgE" }
    ],
    "answer": "C"
  },
  {
    "id": 5,
    "question": "ກາຍະຕ້ານມີ ທາດແທ້ ເປັນ:",
    "choices": [
      { "text": "Protein" },
      { "text": "Glycoprotein" },
      { "text": "Polysaccharide" },
      { "text": "Lipoprotein" }
    ],
    "answer": "B"
  },
  {
    "id": 6,
    "question": "ລັດສະນະສະເພາະ ຂອງ ປັດໃຈຕ້ານ(antigen) ຂື້ນກັບ:",
    "choices": [
      { "text": "ລັກສະນະເຄມີ ຂອງ ປັດໃຈຕ້ານ, ຈຸຕັດສິນປັດໃຈຕ້ານ, ຮ່າງກາຍທີ່ໄດ້ຮັບພຸມຄຸ້ມກັນ" },
      { "text": "ໂຄງສ້າງອາຕອມ protein ຂອງປັດໃຈຕ້ານ, ຈຸຕັດສິນປັດໃຈຕ້ານ, ເສັ້ນທາງເຂົ້າຂອງ ປັດໃຈຕ້ານ" },
      { "text": "ລັກສະນະເຄມີ ຂອງ ປັດໃຈຕ້ານ, ຈຸຕັດສິນປັດໃຈຕ້ານ, ນ້ຳໜັກອາຕອມ ຂອງ ປັດໃຈຕ້ານ" },
      { "text": "ໂຄງສ້າງອາຕອມ ຂອງ ປັດໃຈຕ້ານ, ຈຸຕັດສິນປັດໃຈຕ້ານ, ນ້ຳໜັກອາຕອມຂອງປັດໃຈຕ້ານ" }
    ],
    "answer": "D"
  },
  {
    "id": 7,
    "question": "ກາຍະຕ້ານໜື່ງດຽວທີ່ໄດ້ຮັບຈາກແມ່ຫາລູກແມ່ນ:",
    "choices": [
      { "text": "IgG" },
      { "text": "IgA" },
      { "text": "IgD" },
      { "text": "IgM" }
    ],
    "answer": "A"
  },
  {
    "id": 8,
    "question": "ບັນດາຊະນິດກາຍະຕ້ານເຂົ້າຮ່ວມໃນພຸມຄຸ້ມກັນກັບທີ່ມີ:",
    "choices": [
      { "text": "IgG, IgA" },
      { "text": "IgA, IgD" },
      { "text": "IgD, IgE" },
      { "text": "IgA, IgE" }
    ],
    "answer": "D"
  },
  {
    "id": 9,
    "question": "ໜ້າທີ່ຂອງ ກາຍະຕ້ານ IgM:",
    "choices": [
      { "text": "ປ້ອງກັນບັນດາພະຍາດທາງເດີນອາຫານ ຫຼື ທາງຫາຍໃຈ" },
      { "text": "ປົກປ້ອງຄັນ(ລູກໃນທ້ອງ)ບໍ່ໃຫ້ຕິດເຊື້ອ" },
      { "text": "ມີບົດບາດ ຢູ່ໃນ ພຸມຄຸ້ມກັນກັບທີ່" },
      { "text": "ກະຕຸ້ນ Macrophage ແລະ Eosinophils, ເພີ່ມທະວິກີນຈຸລັງ ຫຼື ເພີ່ມທະວີຜິດເບື່ອ ຂອງ Neutrophil ຕໍ່ກັບແມ່ທ້ອງກາຝາກ" }
    ],
    "answer": "B"
  },
  {
    "id": 10,
    "question": "ບັນດາສາຍ peptidoglycan ຕໍ່ເຂົ້າກັນໄດ້ໂດຍອາໄສ ສຳພັນ ຫຍັງ?",
    "choices": [
      { "text": "Disulfit" },
      { "text": "Hydrogen" },
      { "text": "Amide" },
      { "text": "Interpeptidic" }
    ],
    "answer": "A"
  },
  {
    "id": 11,
    "question": "ຈຸດພິເສດທີ່ແຕກຕ່ງກັນລະຫວ່າງ Mycoplasma ແລະ virus ແມ່ນ:",
    "choices": [
      { "text": "Mycoplasma ບໍ່ ກາຝາກ ໃນຈຸລັງ" },
      { "text": "Mycoplasma ມີຂະໜາດໃຫຍ່ກວ່າ virus" },
      { "text": "Mycoplasma ບັນຈຸ 2 ຊະນິດ axit nucleic" },
      { "text": "ທັງ a ແລະ c ຖຶກ" }
    ],
    "answer": "D"
  },
  {
    "id": 12,
    "question": "ກຸ່ມຈຸລະຊີບຖືວ່າເປັນລະຫວ່າງກາງ ຂອງ Bacteria ແລະ Virus ແມ່ນ:",
    "choices": [
      { "text": "Actinomycetes" },
      { "text": "Mycolplasma" },
      { "text": "Richetisia" },
      { "text": "Mucous membranes" }
    ],
    "answer": "B"
  },
  {
    "id": 13,
    "question": "ຢູ່ໃນ ໂຄງສ້າງອາຕອມໃດ ລຸ່ມນີ້ແມ່ນບໍ່ ບັງຄັບ(ພື້ນຖານ)",
    "choices": [
      { "text": "ຜະໜັງຂັ້ນຈຸລັງ" },
      { "text": "Plasmid" },
      { "text": "Meosome" },
      { "text": "Ribosome" }
    ],
    "answer": "B"
  },
  {
    "id": 14,
    "question": "Acid dipicolinic ມີ ຢູ່ໃນ:",
    "choices": [
      { "text": "Virus" },
      { "text": "Spore ເຊື້ອເຫັດ" },
      { "text": "Spore ຈຸລະຊີບ" },
      { "text": "Blue algae" }
    ],
    "answer": "C"
  },
  {
    "id": 15,
    "question": "ຮູບແບບແພ່ພັນສຳຄັນທີ່ສຸດຂອງເຊື້ອເຫັດໂໝກ:",
    "choices": [
      { "text": "ແພ່ພັນມີເພດ" },
      { "text": "ແພ່ພັນ ບໍ່ມີເພດ" },
      { "text": "ແພ່ພັນ ແບບບຳລຸງລ້ຽງ" },
      { "text": "ທັງ 3 ຮູບແບບຂ້າງເທິງ" }
    ],
    "answer": "B"
  },
  {
    "id": 16,
    "question": "capsule ຂອງ Bacteria ປະກອບສ້າງມາຈາກ:",
    "choices": [
      { "text": "polysaccharide" },
      { "text": "phospholipid" },
      { "text": "peptidoglycan" },
      { "text": "lipoprotein" }
    ],
    "answer": "A"
  },
  {
    "id": 17,
    "question": "ເວລາປູກລ້ຽງ virus ອາດຈະຈຳກັດການກະທົບ ຂອງ ຈຸລະຊີບ ດ້ວຍວິທີໃສ່ເຂົ້າໃນແວດລ້ອມ(ພູມປູກ)ປູກລ້ຽງ ທາດຢາຕ້ານເຊື້ອ.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 18,
    "question": "ຖົງຫຸ້ມນອກແມ່ນພາກສ່ວນ ບໍ່ບັງຄັບ(ບໍ່ພື້ນຖານ) ຢູ່ virus, ແຕ່ວ່າ virus ຊະນິດໃດ ທີ່ມີ ຖົງຫຸ້ມນອກແມ່ນມັນກາຍເປັນສ່ວນ ບັງຄັບ(ພື້ນຖານ) ສຳລັບຊະນິດນັ້ນ.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 19,
    "question": "protein ຂອງ virus HIV ໄດ້ສັງເຄາະຢູ່:",
    "choices": [
      { "text": "ຢູ່ໃນ ແກ້ນຈຸລັງຮ່າງກາຍຮັບກາຝາກ" },
      { "text": "ຢູ່ໃນ ຈຸລັງ ຮ່າງກາຍຮັບກາຝາກ" },
      { "text": "ຂ້າງນອກ ຮ່າງກາຍຮັບກາຝາກ" },
      { "text": "b ແລະ c ຖຶກ" }
    ],
    "answer": "B"
  },
  {
    "id": 20,
    "question": "ເທັກນິກ PCR ໄດ້ຄົ້ນພົບໃນປີ:",
    "choices": [
      { "text": "1965" },
      { "text": "1975" },
      { "text": "1985" },
      { "text": "1995" }
    ],
    "answer": "C"
  },
  {
    "id": 21,
    "question": "ເທັກນິກ PCR ໃຊ້ເພື່ອ:",
    "choices": [
      { "text": "ຕັດທ່ອນ DNA ແມ່ແບບ" },
      { "text": "ຂະຫຍາຍເພີ່ມ DNA ແມ່ແບບ" },
      { "text": "ເຮັດໃຫ້ມີການກາຍພັນ" },
      { "text": "ທັງໝົດລ້ວນ ຖຶກ" }
    ],
    "answer": "B"
  },
  {
    "id": 22,
    "question": "ສາຍພັນ Bacteria ບໍ່ມີຄວາມສາມາດ ຄົງທີ່ທາດຝຸ່ນ:",
    "choices": [
      { "text": "Azotobacter" },
      { "text": "Rhizobium" },
      { "text": "Anabaena" },
      { "text": "Escherichia coli" }
    ],
    "answer": "D"
  },
  {
    "id": 23,
    "question": "Capsule ຢູ່ຈຸລະຊີບ ມີບົດບາດ",
    "choices": [
      { "text": "ສະສົມທາດບຳລຸງລ້ຽງ" },
      { "text": "ປ້ອງກັນ bacteria ຫຼີກຈາກປະກົດການກີນຈຸລັງ" },
      { "text": "ມີລັກສະນະ ປັດໃຈຕ້ານ(antigen)" },
      { "text": "ທັງໝົດລ້ວນ ຖຶກ" }
    ],
    "answer": "D"
  },
  {
    "id": 24,
    "question": "ຜະໜັງຂັ້ນ ຈຸລະຊີບ Gram ບວກ ມີ ສ່ວນປະກອບຕົ້ນຕໍແມ່ນ:",
    "choices": [
      { "text": "Peptidoglycan, acidtechoic" },
      { "text": "Lipid" },
      { "text": "Protein" },
      { "text": "Glucid" }
    ],
    "answer": "A"
  },
  {
    "id": 25,
    "question": "ການກາຍເປັນ Spore ຂອງ ຈຸລະຊີບ ແມ່ນ:",
    "choices": [
      { "text": "ຮູບແບບມີຊີວິດຊົງຕົວຊ່ວຍໃຫ້ ຈຸລະຊີບ ຕ້ານທານຕໍ່ສະພາບບໍ່ອຳນວຍ ຂອງ ແວດລ້ອມ" },
      { "text": "ຮູບແບບ ແພ່ພັນ" },
      { "text": "a & b ຖຶກ" },
      { "text": "a & b ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 26,
    "question": "Ribosome ຂອງ ຈຸລະຊີບ ມີ 2 ຫົວໜ່ວຍ:",
    "choices": [
      { "text": "30s ແລະ 50s" },
      { "text": "40s ແລະ 60s" },
      { "text": "30s ແລະ 60s" },
      { "text": "40s ແລະ 50s" }
    ],
    "answer": "A"
  },
  {
    "id": 27,
    "question": "ຢູ່ໃນ ຜະໜັງຈຸລັງ ຈຸລະຊີບ Gram ລົບ ແລະ Gram ບວກ ພາກສ່ວນໃດ ກວມອັດຕາສູງສຸດ",
    "choices": [
      { "text": "Cellulose" },
      { "text": "Peptidoglycan" },
      { "text": "Saccharide" },
      { "text": "Lipid" }
    ],
    "answer": "B"
  },
  {
    "id": 28,
    "question": "ເຊື້ອເຫັດຢູ່ໃນກຸ່ມ",
    "choices": [
      { "text": "Prokaryote" },
      { "text": "Eukaryote" },
      { "text": "ພືດ" },
      { "text": "ສັດ" }
    ],
    "answer": "B"
  },
  {
    "id": 29,
    "question": "Ribosome ຂອງ ເຊື້ອເຫັດ:",
    "choices": [
      { "text": "ມີແຕ່ 70s" },
      { "text": "ມີແຕ່ 80s" },
      { "text": "ມີທັງສອງຊະນິດ 70s ແລະ 80s" },
      { "text": "ທັງໝົດລ້ວນ ຜິດ" }
    ],
    "answer": "C"
  },
  {
    "id": 30,
    "question": "ກົນໄກການອອກລິດ ຂອງ ຢາຕ້ານເຊື້ອຕໍ່ກັບ Bacteria:",
    "choices": [
      { "text": "ກົດໜີບການສັງເຄາະ axide nucleic." },
      { "text": "ກະທົບເຖິງການສັງເຄາະ protein." },
      { "text": "ກົດໜ່ວງການສັງເຄາະຜະໜັງ ຈຸລັງ." },
      { "text": "ທັງໝົດລ້ວນ ຖຶກ" }
    ],
    "answer": "D"
  },
  {
    "id": 31,
    "question": "ຈຸດພິເສດ ບໍ່ແມ່ນ ຂອງ ປັດໃຈຕ້ານ(antigen):",
    "choices": [
      { "text": "ແມ່ນ protein ແປກປະຫຼາດຕໍ່ກັບຮ່າງກາຍ." },
      { "text": "ມີ ນ້ຳໜັກອາຕອມຫຼາຍ." },
      { "text": "ກະຕຸ້ນ ຮ່າງກາຍ ສ້າງ ກາຍະຕ້ານສະເພາະ." },
      { "text": "ບໍ່ສະເພາະຕໍ່ກັບກາຍະຕ້ານ(antibody)." }
    ],
    "answer": "D"
  },
  {
    "id": 32,
    "question": "ບັນດາປັດໃຈຕ້ານ(antigen) ທາດແທ້ເຄມີເປັນ protein ມັກຈະເອີ້ນວ່າ ປັດໃຈຕ້ານ(antigen) ແຮງ ເພາະວ່າ ຮ່າງກາຍ ບໍ່ອາດສ້າງ ກາຍະຕ້ານຕ້ານກັບມັນ:",
    "choices": [
      { "text": "ຖຶກ." },
      { "text": "ຜິດ." }
    ],
    "answer": "B"
  },
  {
    "id": 33,
    "question": "ພຸມຄຸ້ມກັນ ທີ່ໄດ້ສ້າງຂື້ນຫຼັງຈາກພະຍາດຫາຍດີແມ່ນ:",
    "choices": [
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍຄົນສ້າງຂື້ນ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍຄົນສ້າງຂື້ນ ບໍ່ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບທຳມະຊາດ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບທຳມະຊາດ ບໍ່ເປັນເຈົ້າການ" }
    ],
    "answer": "C"
  },
  {
    "id": 34,
    "question": "ເວລາເກີດໃໝ່, ເດັກນ້ອຍໄດ້ມີ ພຸມຄຸ້ມກັນຕ້ານຕໍ່ບາງຊະນິດພະຍາດ, ນັ້ນແມ່ນ:",
    "choices": [
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບຄົນສ້າງຂື້ນ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບຄົນສ້າງຂື້ນ ບໍ່ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບທຳມະຊາດ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບທຳມະຊາດ ບໍ່ເປັນເຈົ້າການ" }
    ],
    "answer": "D"
  },
  {
    "id": 35,
    "question": "ເງື່ອນໄຂເຮັດໃຫ້ເພີ່ມການຜະລິດ ກາຍະຕ້ານ",
    "choices": [
      { "text": "ຊະນິດປັດໃຈຕ້ານ(antigen) ສົ່ງເຂົ້າໃນຮ່າງກາຍ." },
      { "text": "ຈຳນວນຄັ້ງສົ່ງ ປັດໃຈຕ້ານ(antigen) ເຂົ້າໃນຮ່າງກາຍ." },
      { "text": "ອາຍຸ ຂອງ ຮ່າງກາຍທີ່ຖຶກສັກຢາ" },
      { "text": "ທັງໝົດລ້ວນ ຖຶກ." }
    ],
    "answer": "D"
  },
  {
    "id": 36,
    "question": "ພຸມຄຸ້ມກັນ ໄດ້ສ້າງຂື້ນພາຍຫຼັງໄດ້ສັກ vaccin ແມ່ນ:",
    "choices": [
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍຄົນສ້າງຂື້ນ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍຄົນສ້າງຂື້ນ ບໍ່ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍທຳມະຊາດ ເປັນເຈົ້າການ" },
      { "text": "ພຸມຄຸ້ມກັນ ໄດ້ຮັບ ໂດຍທຳມະຊາດ ບໍ່ເປັນເຈົ້າການ" }
    ],
    "answer": "A"
  },
  {
    "id": 37,
    "question": "ກຸ່ມທາດໃດ ຕໍ່ໄປນີ້ ບໍ່ ມີການອອກລິດຂ້າເຊື້ອ?",
    "choices": [
      { "text": "ເກືອໂລຫະໜັກ" },
      { "text": "Phenol ແລະ ບັນດາອະນຸພັນ" },
      { "text": "ອັງໂກນ" },
      { "text": "ທາດຟອກລ້າງ" },
      { "text": "ທາດ oxidize" }
    ],
    "answer": "D"
  },
  {
    "id": 38,
    "question": "ກວດຫາຈຸລິນຊີເຊື້ອເປັນ(ຍັງມີຊີວິດ)ດ້ວຍວິທີ?",
    "choices": [
      { "text": "ນັບດ້ວຍຫ້ອງນັບເມັດເລືອດແດງ." },
      { "text": "ກວດຫາປະລິມານນີເຕີຜົນບວກ." },
      { "text": "ກວດຫາປະລິມານນີເຕີຈຳນວນລວມ." },
      { "text": "ນັບຈຳນວນ colony ຢູ່ໃນ ແວດລ້ອມ(ພູມປູກ)ແຂ້ນ" }
    ],
    "answer": "D"
  },
  {
    "id": 39,
    "question": "ການສົ່ງທາດກຳມະພັນ ADN ຈາກຈຸລັງ ຈຸລະຊີບ ຕົວໃຫ້ ໄປຫາ ຈຸລັງ ຈຸລະຊີບ ຕົວຮັບ ຜ່ານ ຕົວນຳສົ່ງ Phage ເອີ້ນວ່າປະກົດການ",
    "choices": [
      { "text": "Transformation" },
      { "text": "Transduction" },
      { "text": "Conjugation" },
      { "text": "ທັງໝົດລ້ວນ ຖຶກ" }
    ],
    "answer": "B"
  },
  {
    "id": 40,
    "question": "ເຂົາເຈົ້າໝູນໃຊ້ປະກົດການໃດເພື່ອສ້າງແຜນວາດ gene ຂອງ ຈຸລະຊີບ",
    "choices": [
      { "text": "Transduction" },
      { "text": "Transformation" },
      { "text": "Conjugation" },
      { "text": "ທັງໝົດລ້ວນ ຜິດ" }
    ],
    "answer": "B"
  },
  {
    "id": 41,
    "question": "ການເກີດ spore ຂອງ ຈຸລະຊີບ ແມ່ນ:",
    "choices": [
      { "text": "ຮູບການປ່ຽນ ຈຸລັງ ໃໝ່." },
      { "text": "ຮູບການມີຊີວິດແບບຊົງຕົວ." },
      { "text": "A, B ລ້ວນ ຜິດ." },
      { "text": "A, B ລ້ວນ ຖຶກ." }
    ],
    "answer": "D"
  },
  {
    "id": 42,
    "question": "ຢູ່ໃນ ປະກົດການ Conjugation, ຈຸລະຊີບ ຕົວແມ່ ແມ່ນ ຈຸລະຊີບ.",
    "choices": [
      { "text": "ຖືປັດໃຈ ເພດ F." },
      { "text": "ບໍ່ ຖືປັດໃຈ ເພດ F." },
      { "text": "ໄດ້ແຍກມາຈາກ ໂຄຣໂມໂຊມ ຂອງ ຈຸລັງ Hfr ຖືໄປນຳໜື່ງທ່ອນ DNA ຂອງ ໂຄຣໂມໂຊມ." },
      { "text": "ທັງ A ແລະ C" }
    ],
    "answer": "B"
  },
  {
    "id": 43,
    "question": "ຈຸດພິເສດແຜ່ພັນ ຂອງ virus",
    "choices": [
      { "text": "ແຜ່ພັນ ແບບແບ່ງໂດຍກົງ." },
      { "text": "ແຜ່ພັນ ແບບແບ່ງທ່ອນ." },
      { "text": "ແຜ່ພັນ ຕາມແບບສັງເຄາະບັນດາພາກສ່ວນຫຼັງຈາກນັ້ນປະກອບເຂົ້າຄືນ." },
      { "text": "ແຜ່ພັນ ແບບຂັ້ນທ່ອນ" }
    ],
    "answer": "C"
  },
  {
    "id": 44,
    "question": "ອາດຈະຈຳແນກ spore ແລະ ຈຸລັງເຄື່ອນໄຫວ ຂອງ ຈຸລະຊີບ ດ້ວຍວິທີຍ້ອມ Gram.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 45,
    "question": "capsule ຂອງ ຈຸລະຊີບປະກອບສ້າງຈາກ;",
    "choices": [
      { "text": "polysaccharide" },
      { "text": "phospholipid" },
      { "text": "peptidoglycan" },
      { "text": "lipoprotein" }
    ],
    "answer": "A"
  },
  {
    "id": 46,
    "question": "Mycobacterium tuberculosis (ເຊື້ອວັນນະໂລກ) ໄດ້ຍ້ອມດ້ວຍວິທີ:",
    "choices": [
      { "text": "ຍ້ອມ gram" },
      { "text": "ຍ້ອມ Giemsa" },
      { "text": "ຍ້ອມ ນ້ຳເງີນ" },
      { "text": "ຍ້ອມ Ziehl Neelson" }
    ],
    "answer": "D"
  },
  {
    "id": 47,
    "question": "ເຊື້ອວັນນະໂລກ ເຂົ້າໃນຮ່າງກາຍຕົ້ນຕໍຜ່ານທາງ:",
    "choices": [
      { "text": "ທາງລະລາຍອາຫານ" },
      { "text": "ທາງຫັນໃຈ" },
      { "text": "ທາງເສັ້ນເລືອດ" },
      { "text": "ທັງໝົດ ເສັ້ນທາງຂ້າງເທິງ" }
    ],
    "answer": "B"
  },
  {
    "id": 48,
    "question": "ຫົວໜ່ວຍທີ່ມັກໃຊ້ວັດແທກ virus:",
    "choices": [
      { "text": "mm" },
      { "text": "nm" },
      { "text": "cm" },
      { "text": "μm" }
    ],
    "answer": "B"
  },
  {
    "id": 49,
    "question": "Virus ມີ ບັນດາຮູບຮ່າງໃດ:",
    "choices": [
      { "text": "ຮູບມົນກົມ, ຮູບກ້ອນຫຼາຍໜ້າ,ຮູບທ່ອນ." },
      { "text": "ຮູບມົນກົມ, ຮູບບິດກົ້ນຫອຍ, ຮູບໂຄ້ງ." },
      { "text": "ຮູບມົນກົມ, ຮູບສີ່ແຈສາກ, ຮູບສ້ວຍສອງສົ້ນ." },
      { "text": "ຮູບມົນກົມ, ຮູບທ່ອນ, ຮູບເຄື່ອງໝາຍຈຸດ." }
    ],
    "answer": "A"
  },
  {
    "id": 50,
    "question": "ທັງໝົດບັນດາຊະນິດ virus ລ້ວນແຕ່ມີ ໂຄງສ້າງ ພື້ນຖານ:",
    "choices": [
      { "text": "ແກ່ນ, ເນື້ອຈຸລັງ." },
      { "text": "ແກ່ນ,ເປືອກ." },
      { "text": "ແກນ acid nucleic, ເປືອກ capsid" },
      { "text": "ຖົງຫຸ້ມນອກ ແລະ ບັນດາ ribosome" }
    ],
    "answer": "C"
  },
  {
    "id": 51,
    "question": "ຂະບວນການ ແພ່ພັນ ຂອງ virus ລວມມີຈັກຂັ້ນຕອນຕົ້ນຕໍ:",
    "choices": [
      { "text": "3" },
      { "text": "4" },
      { "text": "5" },
      { "text": "6" }
    ],
    "answer": "B"
  },
  {
    "id": 52,
    "question": "ເຂົາເຈົ້າປູກລ້ຽງ virus ຢູ່:",
    "choices": [
      { "text": "ແວດລ້ອມທາດແຫຼວຄົນສ້າງຂື້ນ, ມີຫຼາຍທາດບຳລຸງລ້ຽງ." },
      { "text": "ໜໍ່ລູກໄກ່, ສັດ ເຊັ່ນ: ລີງ, ກະຕ່າຍ, ຫນູຂາວ...." },
      { "text": "ເທິງຈຸລັງມີຊີວິດ ຢູ່ໃນ ຫຼອດແກ້ວ ( in vitro)" },
      { "text": "B ແລະ C ຖຶກ." }
    ],
    "answer": "D"
  },
  {
    "id": 53,
    "question": "Virus HIV ບໍ່ຄົງຕົວ ຢູ່ໃນ ນ້ຳລາຍ, ອາສຸຈິ:",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 54,
    "question": "ສາມ ເສັ້ນທາງສົ່ງຂໍ້ມູນກຳມະພັນ ພື້ນຖານ ຢູ່ຈຸລະຊີບມີເສັ້ນທາງໃດແດ່?",
    "choices": [
      { "text": "Transformation , Transduction,  Conjugation" }
    ],
    "answer": "A"
  },
  {
    "id": 55,
    "question": "ຢາຕ້ານເຊື້ອເປັນສານທີ່ປ້ອງກັນບໍ່ໃຫ້ບັກເຕເຣຍເພີ່ມຈຳນວນ ຫຼື ຂ້າບັກເຕເຣຍດ້ວຍ ກົນໄກ ດັ່ງຕໍ່ໄປນີ້:",
    "choices": [
      { "text": "ຜົນກະທົບຕໍ່ຄວາມດຸນດ່ຽງທາງຟີຊິກຂອງຈຸລັງບັກເຕເຣຍ." },
      { "text": "ຜົນກະທົບຕໍ່ບັນດາຂັ້ນຕອນການ ແລກປ່ຽນທາດ (METABOLIC) ຂອງຊີວິດບັກເຕເຣຍ." },
      { "text": "ການຢັບຢັ້ງການສັງເຄາະໂປຣຕີນ." },
      { "text": "ກະທົບຕໍ່ຂັ້ນຕອນການແບ່ງຂອງຈຸລັງບັກເຕເຣຍ." }
    ],
    "answer": "B"
  },
  {
    "id": 56,
    "question": "ຢາຕ້ານເຊື້ອມີລັກສະນະດັ່ງຕໍ່ໄປນີ້:",
    "choices": [
      { "text": "ມີແຫຼ່ງທີ່ມາພື້ນຖານຈາກສານເຄມີ." },
      { "text": "ມີແຫຼ່ງທີ່ມາພື້ນຖານຈາກພືດ." },
      { "text": "ຢາຕ້ານເຊື້ອແຕ່ລະຊະນິດອອກລິດກັບບັກເຕເຣຍບາງກຸ່ມ ຫຼື ບາງຊະນິດເທົ່ານັ້ນ." },
      { "text": "ຢາ antibiotic ທີ່ອອກລິດກວ້າງຂວາງແມ່ນ antibiotic ທີ່ຂ້າເຊື້ອບັກເຕເຣຍທີ່ເຮັດໃຫ້ເກີດພະຍາດ ຫລາຍຊະນິດ." }
    ],
    "answer": "C"
  },
  {
    "id": 57,
    "question": "ກົນໄກການກະທົບຂອງຢາຕ້ານເຊື້ອຕໍ່ບັກເຕເຣຍມີຈັກກົນໄກ :",
    "choices": [
      { "text": "3 ກົນໄກ." },
      { "text": "4 ກົນໄກ." },
      { "text": "5 ກົນໄກ." },
      { "text": "6 ກົນໄກ." }
    ],
    "answer": "C"
  },
  {
    "id": 58,
    "question": "ລັກສະນະຂອງການຕ້ານຕໍ່ຢາໂດຍທໍາມະຊາດຂອງບັກເຕເຣຍທີ່ຕ້ານຕໍ່ຢາກັບຢາຕ້ານເຊື້ອ:",
    "choices": [
      { "text": "ບໍ່ຂຶ້ນກັບປັດໄຈທາງພັນທຸກໍາ." },
      { "text": "ພົບໃນບັກເຕເຣຍທີ່ມີ plasmid ເທົ່ານັ້ນ." },
      { "text": "ບັກເຕເຣຍບາງຊະນິດບໍ່ໂດຍໄດ້ຮັບຜົນກະທົບຈາກຢາຕ້ານເຊື້ອບາງຊະນິດ." },
      { "text": "ພັນທຸກໍາຕ້ານຕໍ່ຢາຕັ້ງຢູ່ເທິງໂຄຣໂມໂຊມ ຫຼື plasmid ຫຼື transposons." }
    ],
    "answer": "C"
  },
  {
    "id": 59,
    "question": "ຢາປາບເຊື້ອມີລັກສະນະດັ່ງຕໍ່ໄປນີ້:",
    "choices": [
      { "text": "ໄດ້ຈາກສານເຄມີ ຫຼື ຈາກສັດ ຫຼື ພືດ." },
      { "text": "ສໍາລັບການປາບເຊື້ອພະຍາດຢູ່ນຳວັດຖຸເທົ່ານັ້ນ." },
      { "text": "ມັນມີຄວາມສາມາດໃນການຂ້າຈຸລິນຊີ ດັ່ງນັ້ນຈຶ່ງສາມາດໃຊ້ກັບທີ່ໄດ້ ເຊັ່ນທາບົນໜ້າຜິວໜັງ." },
      { "text": "ມີຜົນກະທົບຢ່າງແຮງຕໍ່ບັກເຕເຣຍ, ຢຸດການເຕີບໂຕຂອງບັກເຕເຣຍ." }
    ],
    "answer": "B"
  },
  {
    "id": 60,
    "question": "ມາດຕະການຢ່າງຫນຶ່ງເພື່ອປ້ອງກັນການຕ້ານຕໍ່ຢາຂອງບັກເຕເຣຍແມ່ນ:",
    "choices": [
      { "text": "ການປິ່ນປົວຈະໃຊ້ໄດ້ເມື່ອມີຜົນຢາຕ້ານເຊື້ອເທົ່ານັ້ນ." },
      { "text": "ການປິ່ນປົວສາມາດໃຊ້ໄດ້ເມື່ອສາມາດແຍກບັກເຕເຣຍແລະລະບຸຕົວໄດ້." },
      { "text": "ເລືອກ antibiotic ຕາມ ຜົນ ຂອງ ການເຮັດທົດລອງຢາຕ້ານເຊື້ອ." },
      { "text": "ປະສົມຢາຕ້ານເຊື້ອຫຼາຍຊະນິດແລະເພີ່ມປະລິມານຢາຕ້ານເຊື້ອ." }
    ],
    "answer": "C"
  },
    {
    "id": 61,
    "question": "(ຫນຶ່ງຄໍາຕອບ)ການປະສົມຢາຕ້ານເຊື້ອປະເພດໃດທີ່ມີຜົນກະທົບຮ່ວມກັນ",
    "choices": [
      { "text": "β lactam ແລະ aminoglycoside" },
      { "text": "β lactam ແລະ βlactam inhibitors" },
      { "text": "β lactam ແລະ" },
      { "text": "A ແລະ B ລ້ວນຖຶກ" },
      { "text": "A ແລະ C ລ້ວນຖຶກ" }
    ],
    "answer": "A"
  },
  {
    "id": 62,
    "question": "ບັກເຕເຣຍທີ່ມີສະປໍຣ ເຊັ່ນ: ບັກເຕເຣຍ C. tetani, C. perfringens, C. botulinum.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "A"
  },
  {
    "id": 63,
    "question": "ແກນຂອງບັກເຕເຣຍບັນຈຸ Nucleic Acids ດັ່ງຕໍ່ໄປນີ້:",
    "choices": [
      { "text": "ARN" },
      { "text": "ARN ແລະ DNA" },
      { "text": "ບາງຊະນິດ DNA, ບາງຊະນິດ ARN." },
      { "text": "DNA" },
      { "text": "ສ່ວນຫຼາຍແມ່ນ DNA." }
    ],
    "answer": "C"
  },
  {
    "id": 64,
    "question": "ບັກເຕເຣຍທີ່ເອີ້ນວ່າ gram (+) ຫຼື gram (-) ເກີດຈາກ",
    "choices": [
      { "text": "ລັກສະນະທາງພັນທຸກໍາທີ່ແຕກຕ່າງກັນ." },
      { "text": "ໂຄງສ້າງທາງເຄມີຂອງກໍາແພງຈຸລັງບັກເຕເຣຍແຕກຕ່າງກັນ." },
      { "text": "ຈັບສີທີ່ແຕກຕ່າງກັນເມື່ອສີແຕກ." },
      { "text": "ຜົນກະທົບທີ່ແຕກຕ່າງກັນຂອງຢາຕ້ານເຊື້ອ." },
      { "text": "ເນື່ອງຈາກການຈັບສີທີ່ແຕກຕ່າງກັນເມື່ອຍ້ອມສີກຣາມ." }
    ],
    "answer": "E"
  },
  {
    "id": 65,
    "question": "ຂົນຂອງບັກເຕເຣຍ",
    "choices": [
      { "text": "ມີຢູ່ໃນບັກເຕເຣຍທຸກຊະນິດ." },
      { "text": "ເມື່ອບັກເຕເຣຍສູນເສຍຂົນມັນກໍຕາຍ." },
      { "text": "ບໍ່ເຄີຍຢູ່ອ້ອມຮອບຮ່າງກາຍ." },
      { "text": "ອະໄວຍະວະເຄື່ອນທີ່ຂອງບັກເຕເຣຍ" },
      { "text": "ຄວາມຮຸນແຮງເມື່ອເຂົ້າໄປໃນຮ່າງກາຍຂອງມະນຸດ." }
    ],
    "answer": "D"
  },
  {
    "id": 66,
    "question": "ການຕິດເຊື້ອໃນໂຮງຫມໍແມ່ນການຕິດເຊື້ອທີ່ໄດ້ຮັບ(ໃຫ້ເລືອກບັນດາຂໍ້ທີ່ຖຶກ):",
    "choices": [
      { "text": "ເກີດຂຶ້ນໃນ 48 – 72 ຊົ່ວໂມງຫຼັງຈາກເຂົ້າໂຮງຫມໍ" },
      { "text": "ເກີດຂຶ້ນພາຍໃນ 10 ມື້ຫຼັງຈາກອອກໂຮງຫມໍ" },
      { "text": "ກ່ອນຄົນເຈັບຈະເຂົ້າໂຮງຫມໍ" },
      { "text": "ມີໄລຍະຟັກຕົວໃນເວລາທີ່ເຂົ້າໂຮງຫມໍ" },
      { "text": "ໄວຣັສ Norwalk ມີໄລຍະຟັກຕົວດົນກວ່າ 72 ຊົ່ວໂມງ" },
      { "text": "Hepatitis A ມີໄລຍະຟັກຕົວດົນກວ່າ 10 ມື້" }
    ],
    "answer": "A" // หมายเหตุ: ข้อนี้มีหลายข้อถูก ควรปรับ logic ในโค้ดถ้าต้องการเลือกหลายข้อ
  },
  {
    "id": 67,
    "question": "ການຕິດເຊື້ອໃນໂຮງຫມໍທີ່ມັກພົບຫຼາຍກ່ວາໝູ່ແມ່ນ:",
    "choices": [
      { "text": "ຊືມເຊື້ອເລືອດ" },
      { "text": "ການຕິດເຊື້ອຈາກບາດແຜພາຍນອກ" },
      { "text": "ການຕິດເຊື້ອທາງລະບົບຖ່າຍເທ" },
      { "text": "ການຕິດເຊື້ອທາງເດີນຫາຍໃຈ" }
    ],
    "answer": "C"
  },
  {
    "id": 68,
    "question": "ເລືອກປະໂຫຍກທີ່ຖືກຕ້ອງກ່ຽວຂ້ອງກັບການຕິດເຊື້ອໃນໂຮງຫມໍ:",
    "choices": [
      { "text": "ສາມາດປ້ອງກັນໄດ້" },
      { "text": "ຄ່າໃຊ້ຈ່າຍການປິ່ນປົວເພີ່ມຂຶ້ນ" },
      { "text": "ແກ່ຍາວເວລານອນປິ່ນປົວຢູ່ໂຮງຫມໍ" },
      { "text": "ທັງຫມົດລ້ວນຖຶກຕ້ອງ" }
    ],
    "answer": "D"
  },
  {
    "id": 69,
    "question": "ເລືອກປະໂຫຍກທີ່ຜິດກ່ຽວກັບການຕິດເຊື້ອໃນໂຮງຫມໍ:",
    "choices": [
      { "text": "ການຕິດເຊື້ອໃນໂຮງຫມໍມີໄລຍະບົ່ມເຊື້ອຕັ້ງແຕ່ກ່ອນຄົນເຈັບຈະເຂົ້າໂຮງຫມໍ" },
      { "text": "ການຕິດເຊື້ອໃນໂຮງຫມໍ ທີ່ກ່ຽວຂ້ອງກັບບັນດາຫັດທະການທາງພາຍນອກ ແລະ ຂະບວນການປິ່ນປົວ" },
      { "text": "ການຕິດເຊື້ອຈາກຊຸມຊົນທີ່ຖືກນໍາເຂົ້າມາໃນໂຮງຫມໍອາດເປັນແຫລ່ງ ຂອງ ການຕິດເຊື້ອໃນໂຮງຫມໍ." },
      { "text": "ການຕິດເຊື້ອທີ່ໄດ້ຮັບຈາກໂຮງຫມໍມັກຈະເກີດຂຶ້ນໃນຄົນເຈັບທີ່ມີພູມຕ້ານທານບົກຜ່ອງຢ່າງຮຸນແຮງ" }
    ],
    "answer": "A"
  },
  {
    "id": 70,
    "question": "ຢາໃດປົວການຕິດເຊື້ອ S. aureus ມີປະສິດທິພາບຫນ້ອຍທີ່ສຸດ?",
    "choices": [
      { "text": "Ampicillin (penicillin)" },
      { "text": "Methicillin (ແຮງທີ່ສຸດຕໍ່ກັບ Staphylococcus aureus)" },
      { "text": "Cephalothin (cephalosporin ລຸ້ນທີ 1 ແຮງກວ່າ ampicillin)" },
      { "text": "Oxacillin" },
      { "text": "Nafcillin" }
    ],
    "answer": "A"
  },
  {
    "id": 71,
    "question": "ຢາອັນໃດຕໍ່ໄປນີ້ຄວນໃຊ້ເພື່ອປິ່ນປົວອັກເສບເຫຍື້ອຫຸ້ມສະໝອງຍ້ອນເຊື້ອ N. meningitis ໃນຜູ້ໃຫຍ່ທີ່ບໍ່ແພ້ຕໍ່ beta-lactam?",
    "choices": [
      { "text": "Penicillin G" },
      { "text": "Methicillin" },
      { "text": "Carbenicillin" },
      { "text": "Cefalothin" },
      { "text": "Ticarcillin" }
    ],
    "answer": "A"
  },
  {
    "id": 72,
    "question": "ຢາໃດຕໍ່ໄປນີ້ທີ່ຖຶກທຳລາຍໂດຍ enzyme penicillinase ?",
    "choices": [
      { "text": "Dicloxacillin" },
      { "text": "Methicillin" },
      { "text": "Nafcillin" },
      { "text": "Penicillin" },
      { "text": "Oxacillin" }
    ],
    "answer": "D"
  },
  {
    "id": 73,
    "question": "ຢາຕ້ານເຊື້ອໃດທີ່ປິ່ນປົວ Staphylococcus aureus ທີ່ສ້າງແອນຊີມ penicillinase? (beta- lactam)",
    "choices": [
      { "text": "Ampicillin" },
      { "text": "Oxacillin" },
      { "text": "Carbenicillin" },
      { "text": "Amoxicillin" },
      { "text": "Penicillin" }
    ],
    "answer": "B"
  },
  {
    "id": 74,
    "question": "ຢາຕ້ານເຊື້ອກຸ່ມໃດທີ່ມີຂອບເຂດອອກລິດກວ້າງຂວາງທີ່ສຸດໃນປະຈຸບັນ?",
    "choices": [
      { "text": "Penicillin" },
      { "text": "Cephalosporin" },
      { "text": "Vancomycin" },
      { "text": "Carbapenem" },
      { "text": "Quinolone" }
    ],
    "answer": "D"
  },
  {
    "id": 75,
    "question": "ຢາຕົວໃດແດ່ທີ່ຢູ່ໃນກຸ່ມຂອງ macrolides?",
    "choices": [
      { "text": "Neomycin" },
      { "text": "Doxycycline" },
      { "text": "Erythromycin" },
      { "text": "Cefotaxime" }
    ],
    "answer": "C"
  },
  {
    "id": 76,
    "question": "ຢາຕົວໃດທີ່ຢູ່ໃນກຸ່ມ carbapenems?",
    "choices": [
      { "text": "Aztreonam" },
      { "text": "Amoxicillin" },
      { "text": "Imipenem" },
      { "text": "Clarithromycin" }
    ],
    "answer": "C"
  },
  {
    "id": 77,
    "question": "ຢາຕົວໃດແດ່ທີ່ຢູ່ໃນກຸ່ມ cephalosporins?",
    "choices": [
      { "text": "Streptomycin" },
      { "text": "Cefaclor" },
      { "text": "Phenoxymethylpenicillin" },
      { "text": "Erythromycin" }
    ],
    "answer": "B"
  },
  {
    "id": 78,
    "question": "ຢາຕົວໃດທີ່ຢູ່ໃນກຸ່ມ monobactams?",
    "choices": [
      { "text": "Ampicillin" },
      { "text": "Bicillin-5" },
      { "text": "Aztreonam" },
      { "text": "Imipenem" }
    ],
    "answer": "C"
  },
  {
    "id": 79,
    "question": "ຢາຊະນິດໃດທີ່ຢູ່ໃນກຸ່ມ tetracyclines",
    "choices": [
      { "text": "Doxycycline" },
      { "text": "Streptomycin" },
      { "text": "Clarithromycin" },
      { "text": "Amoxicillin" }
    ],
    "answer": "A"
  },
  {
    "id": 80,
    "question": "ຢາທັງຫມົດຕໍ່ໄປນີ້ເປັນຂອງ aminoglycosides, ຍົກເວັ້ນ:",
    "choices": [
      { "text": "Gentamycin" },
      { "text": "Streptomycin" },
      { "text": "Clindamycin" },
      { "text": "Neomycin" }
    ],
    "answer": "C"
  },
  {
    "id": 81,
    "question": "ຢາທີ່ຢູ່ໃນກຸ່ມຂອງສານ nitrobenzene?",
    "choices": [
      { "text": "Clindamycin" },
      { "text": "Streptomycin" },
      { "text": "Azithromycin" },
      { "text": "Chloramphenicol" }
    ],
    "answer": "D"
  },
  {
    "id": 82,
    "question": "ຢາອັນໃດແດ່ທີ່ຢູ່ໃນກຸ່ມ glycopeptides?",
    "choices": [
      { "text": "Vancomycin" },
      { "text": "Lincomycin" },
      { "text": "Neomycin" },
      { "text": "Carbenicillin" }
    ],
    "answer": "A"
  },
  {
    "id": 83,
    "question": "ຢາຕ້ານເຊື້ອຢັບຢັ້ງການສັງເຄາະພະໜັງຈຸລັງຂອງບັກເຕເຣຍ",
    "choices": [
      { "text": "Beta-lactam antibiotics" },
      { "text": "Tetracyclines" },
      { "text": "Aminoglycosides" },
      { "text": "Macrolides" }
    ],
    "answer": "A"
  },
  {
    "id": 84,
    "question": "ຢາຕ້ານເຊື້ອທີ່ຢັບຢັ້ງການສັງເຄາະ RNA ແມ່ນ?",
    "choices": [
      { "text": "Erythromycin" },
      { "text": "Rifampin" },
      { "text": "Chloramphenicol" },
      { "text": "Imipenem" }
    ],
    "answer": "B"
  },
  {
    "id": 85,
    "question": "ຢາຕ້ານເຊື້ອເຮັດໃຫ້ປ່ຽນແປງການຊຶມຊັບຂອງເຍື່ອຫຸ້ມຈຸລັງແມ່ນ?",
    "choices": [
      { "text": "Glycopeptides" },
      { "text": "Polymyxins" },
      { "text": "Tetracyclines" },
      { "text": "Cephalosporins" }
    ],
    "answer": "B"
  },
  {
    "id": 86,
    "question": "ຢາທັງຫມົດຕໍ່ໄປນີ້ອອກລິດຢັບຢັ້ງການສັງເຄາະໂປຣຕີນໃນຈຸລັງບັກເຕເຣຍ ຍົກເວັ້ນ:",
    "choices": [
      { "text": "Macrolides" },
      { "text": "Aminoglycosides" },
      { "text": "Glycopeptide" },
      { "text": "Tetracycline" }
    ],
    "answer": "C"
  },
  {
    "id": 87,
    "question": "ກົນໄກການຕ້ານເຊື້ອບັກເຕເຣຍຂອງ penicillin ແມ່ນ:",
    "choices": [
      { "text": "ຢັບຢັ້ງຂະບວນການ transpeptide ໃນພະໜັງຈຸລັງບັກເຕເຣຍ" },
      { "text": "ຢັບຢັ້ງ beta-lactamase ໃນຈຸລັງບັກເຕເຣຍ" },
      { "text": "ກະຕຸ້ນເຮັດໃຫ້ protease ພາຍໃນ, ທໍາລາຍພະໜັງຈຸລັງບັກເຕເຣຍ" },
      { "text": "ການກະຕຸ້ນບັນດາ phospholipase ພາຍໃນ, ເຮັດໃຫ້ເກີດການປ່ຽນແປງຄວາມສາມາດຊຶມຊັບຂອງເຍື່ອຫຸ້ມຈຸລັງ" }
    ],
    "answer": "A"
  },
  {
    "id": 88,
    "question": "ທາດທີ່ຢັບຢັ້ງ beta-lactamase ສາມາດສົມທົບກັບ penicillin ແມ່ນ:",
    "choices": [
      { "text": "Clavulanic acid" },
      { "text": "Sulbactam" },
      { "text": "Tazobactam" },
      { "text": "ຢາທັງ 3 ຊະນິດຂ້າງເທິງ" }
    ],
    "answer": "D"
  },
  {
    "id": 89,
    "question": "Carbapenems ອອກລິດໄດ້ຜົນດີກັບ:",
    "choices": [
      { "text": "ເຊື້ອ Gram ບວກ" },
      { "text": "Gram-negative (ລົບ)" },
      { "text": "ຂອບເຂດອອກລິດກວ້າງຂວາງ" }
    ],
    "answer": "C"
  },
  {
    "id": 90,
    "question": "ຢາທັງຫມົດຕໍ່ໄປນີ້ເປັນຢາໃນກຸ່ມ macrolides, ຍົກເວັ້ນ:",
    "choices": [
      { "text": "Erythromycin" },
      { "text": "Clarithromycin" },
      { "text": "Lincomycin" },
      { "text": "Roxithromycin" }
    ],
    "answer": "C"
  },
  {
    "id": 91,
    "question": "ຜົນຂ້າງຄຽງທີ່ບໍ່ຕ້ອງການຂອງ Tetracyclines ມີຫຍັງແດ່?",
    "choices": [
      { "text": "ກະຕຸ້ນເຍື່ອເມືອກ ທາງເດີນອາຫານ, ຄວາມເປັນພິດຕໍ່ແສງສະຫວ່າງ" },
      { "text": "ພິດເບື້່ອຕໍ່ຕັບ (Hepatotoxic), anti-anabolic" },
      { "text": "ແຂ້ວຜິດປົກກະຕິ(Dental dysplasia), ກະດູກຜິດປົກກະຕິ" },
      { "text": "ຖຶກທັງຫມົດທຸກຂໍ້ທີ່ກ່າວມາຂ້າງເທິງ" }
    ],
    "answer": "D"
  },
  {
    "id": 92,
    "question": "ຜົນກະທົບທີ່ບໍ່ຕ້ອງການຂອງ Aminoglycosides ມີຫຍັງແດ່?",
    "choices": [
      { "text": "ເມັດເລືອດຂາວລຸດ" },
      { "text": "ເປັນພິດຕໍ່ຕັບ" },
      { "text": "ເປັນພິດຕໍ່ຫູ(Ototoxicity), ເປັນພິດຕໍ່ໄຂ່ຫຼັງ(nephrotoxicity)" },
      { "text": "ກະຕຸ້ນລະຄາຍເຄືອງເຍື່ອເມືອກທາງເດີນອາຫານ" }
    ],
    "answer": "C"
  },
  {
    "id": 93,
    "question": "Aminoglycosides ເປັນຢາຕ້ານເຊື້ອທີ່ອອກລິດກວ້າງຂວາງ ດັ່ງນັ້ນມັນຈຶ່ງຂ້າໄດ້ທັງບັກເຕເຣຍ aerobic ແລະ anaerobic.",
    "choices": [
      { "text": "ຖຶກ" },
      { "text": "ຜິດ" }
    ],
    "answer": "B"
  }
];
