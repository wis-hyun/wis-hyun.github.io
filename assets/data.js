/* ✏️  DATA — 여기만 수정하면 사이트 내용이 바뀝니다 (ko / en) */
const DATA = {
  roles: {
    ko: ["신뢰할 수 있는 인공지능","LLM을 제대로 평가하는 방법","안전하고 윤리적인 AI 시스템","스스로 판단하고 행동하는 에이전트"],
    en: ["AI that people can trust","better ways to evaluate LLMs","safe and ethical AI systems","agents that reason and act on their own"]
  },
  marquee: ["Trustworthy AI","LLM Evaluation","Benchmarking","AI Ethics & Safety","AI Agents","Large Language Models","PyTorch","SMU-NLP Lab","Sookmyung Women's University"],
  interests: [
    {n:"Trustworthy AI",k:"01"},{n:"LLM Evaluation & Benchmarking",k:"02"},{n:"AI Ethics & Safety",k:"03"},
    {n:"AI Agents",k:"04"},{n:"Large Language Models",k:"05"},{n:"Multimodal AI",k:"06"}
  ],
  stats: [
    {n:4.26,dec:2,suf:"/4.5",ko:"전공 평점",en:"Major GPA"},
    {n:3,pre:"Top ",suf:"%",ko:"학과 석차",en:"Academic standing"},
    {n:5,suf:"",ko:"수상 (2위 ×4, 3위 ×1)",en:"Awards (4× 2nd, 1× 3rd)"},
    {n:10,suf:"+",ko:"프로젝트 · 5 자격증",en:"Projects · 5 certifications"}
  ],
  experience: [
    {
      org:{ko:"SMU-NLP Lab · 숙명여자대학교",en:"SMU-NLP Lab · Sookmyung Women's University"},
      role:{ko:"연구 인턴 (문현석 교수님 연구실)",en:"Research Intern (Prof. Hyeonseok Moon's lab)"},
      period:"2026.10 — Present",
      bullets:{
        ko:["숙명여자대학교 자연어처리 연구실(SMU-NLP Lab)에서 연구 인턴으로 활동 중","AI 에이전트, 데이터·모델 평가, 벤치마크, 리소스 구축을 다루는 연구실에서 세미나와 연구 활동에 참여","LLM 평가 방법론과 신뢰할 수 있는 AI에 대해 공부하는 중"],
        en:["Research intern at the Natural Language Processing Lab (SMU-NLP), Sookmyung Women's University","Taking part in seminars and research activities in a lab working on AI agents, data & model evaluation, benchmarking, and resource construction","Studying LLM evaluation methodology and trustworthy AI"]
      },
      take:{ko:"신뢰할 수 있는 AI를 향한 연구의 출발점 — 연구가 어떻게 이루어지는지 배우는 중",en:"The starting point of my research path toward trustworthy AI — learning how research is done"},
      tags:["LLM Evaluation","Benchmarking","Research"], photos:[],
      link:{l:"nlplab-sookmyung.github.io",u:"https://nlplab-sookmyung.github.io/"}
    },
    {
      org:{ko:"University of the Nations — DTS",en:"University of the Nations — DTS"},
      role:{ko:"Discipleship Training School · 하와이",en:"Discipleship Training School · Hawaii"},
      period:"2026.04 — 2026.09",
      bullets:{
        ko:["하와이에서 진행된 DTS 훈련 프로그램에 참여, 전 세계에서 온 사람들과 소통하며 생활","낯선 환경에서 새로운 문화를 익히며 개인주의적 문화와 한국의 정(情) 문화의 차이를 직접 경험","돌아온 뒤에도 각국의 친구들과 연락을 이어가고 싶어, 시차를 계산하고 만날 시간을 찾아주는 작은 웹앱 TimeSync를 직접 만들어 사용"],
        en:["Joined the DTS training program in Hawaii, living and communicating with people from around the world","Learned a new culture first-hand and experienced the contrast between individualist and Korean community-oriented cultures","To stay in touch with friends across time zones afterwards, built and used TimeSync — a small web app that finds overlapping meeting times"]
      },
      take:{ko:"영어 커뮤니케이션 능력, 글로벌 시야, 문화적 차이를 극복하는 경험",en:"English communication, a global perspective, and experience bridging cultural differences"},
      tags:["Global","Communication","English"], photos:["dts_group","dts_hike","dts_trek"],
      link:{l:"TimeSync on GitHub",u:"https://github.com/wis-hyun/TimeSync"}
    },
    {
      org:{ko:"서울대학교 빅데이터연구원",en:"Seoul National University Big-Data Institute"},
      role:{ko:"학생 인턴 (원격)",en:"Student Intern (remote)"},
      period:"2025.12 — 2026.01",
      bullets:{
        ko:["원격 환경에서 대형 언어 모델(LLM)의 프롬프트 기반 평가 수행","NLP · 컴퓨터 비전 · 데이터 분석 등 전공 수업을 바탕으로 모델 응답을 검증할 질문 세트 설계","여러 모델의 출력을 비교·검토하여 성능 차이 분석","평가 결과를 정리하고 결과 문서화 지원"],
        en:["Worked on prompt-based evaluation of large language models in a remote setting","Designed question sets based on coursework (NLP, computer vision, data analysis) to test model responses","Reviewed and compared outputs across models to analyze performance differences","Organized evaluation results and assisted in documenting findings"]
      },
      take:{ko:"실제 평가 과제를 통해 핵심 AI 개념의 이해를 강화하고, AI 모델 성능을 분석·비교하는 경험을 쌓음",en:"Strengthened understanding of core AI concepts through practical evaluation tasks; gained experience analyzing and comparing model performance"},
      tags:["LLM Evaluation","Prompting","Multi-LLM Review"], photos:["snu_1","snu_2","snu_0"]
    },
    {
      org:{ko:"빅데이터 산업진흥 서포터즈",en:"Big-Data Industry Supporter"},
      role:{ko:"서포터즈",en:"Supporter"},
      period:"2025.04 — 2026.02",
      bullets:{
        ko:["데이터 리터러시 확산을 위한 데이터 기반 홍보 프로그램 기획·실행","사용자 행동을 이해하고 참여도를 높이기 위한 설문 설계 및 분석","리포트·카드뉴스 등 데이터 기반 콘텐츠 제작으로 인사이트를 쉽게 전달","현장 행사 운영 지원 및 참가자 응대"],
        en:["Planned and executed data-driven outreach programs to promote data literacy","Designed and analyzed surveys to understand user behavior and improve engagement","Created data-based content (reports, card news) to communicate insights clearly","Supported on-site events and managed participant interactions"]
      },
      take:{ko:"다양한 대상과 소통하는 능력, 데이터 인사이트를 쉬운 콘텐츠로 옮기는 경험, 실제 프로그램을 운영하는 실행력",en:"Communication across diverse audiences, translating data insights into accessible content, and running real-world programs"},
      tags:["Data Literacy","Survey Analysis","Content"], photos:["IMG_5638","IMG_5119","IMG_3541","IMG_6795"]
    },
    {
      org:{ko:"OUTSTANDERS × 스타트업 산학협력",en:"OUTSTANDERS — Industry-Academic Project"},
      role:{ko:"프로젝트 인턴 · 2위 수상",en:"Project Intern · 2nd Place"},
      period:"2025.09 — 2025.12",
      bullets:{
        ko:["스타트업과 함께하는 산학협력 프로젝트에 참여","컴퓨터 비전 기반 데이터 수집 및 크롤링 기법 탐구","프로젝트 전 과정에서 실험을 수행하고 결과를 문서화","기업 CTO와 소통하며 아이디어와 접근 방식을 구체화"],
        en:["Participated in an industry-academic collaboration project with a startup","Explored computer vision-based data collection and crawling techniques","Conducted experiments and documented results throughout the project","Communicated with the company's CTO to refine ideas and approaches"]
      },
      take:{ko:"실험적 문제 해결, 기술 실험을 기록하고 반복 개선하는 방법, 현업 전문가와의 협업 경험",en:"Hands-on experimental problem-solving, documenting and iterating on technical experiments, and collaborating with industry professionals"},
      tags:["Computer Vision","Crawling","Startup"], photos:["IMG_1140","IMG_1142"]
    },
    {
      org:{ko:"서울대학교 교환학생",en:"Seoul National University — Exchange Student"},
      role:{ko:"데이터 기반 사회문제 해결 과정",en:"Data-Driven Social Problem Solving"},
      period:"2025.06 — 2025.08",
      bullets:{
        ko:["'데이터 기반 사회문제 해결' 과목 이수","지역 단체(관악 뿌리재단)와 협업 프로젝트 수행","토론 및 팀 기반 문제 해결 활동 참여"],
        en:["Completed coursework in 'Data-Driven Social Problem Solving'","Collaborated on a project with a local organization (Gwanak Roots Foundation)","Participated in discussions and team-based problem-solving activities"]
      },
      take:{ko:"학제 간 협업 경험, 발표·소통 능력 향상, 데이터를 실제 문제에 적용하는 넓은 시야",en:"Interdisciplinary collaboration, stronger presentation and communication skills, and a broader view of applying data to real issues"},
      tags:["SNU","Social Impact","Teamwork"], photos:["IMG_5588","IMG_1143"]
    },
    {
      org:{ko:"GDGoC Sookmyung",en:"GDGoC Sookmyung"},
      role:{ko:"Google Developer Group on Campus · 멤버",en:"Google Developer Group on Campus · Member"},
      period:"2024.09 — 2025.03",
      bullets:{
        ko:["CNN, ResNet 등 딥러닝 모델을 학습하고 직접 구현","기술 스터디 세션과 프로젝트 기반 협업에 참여","이론적 지식을 소규모 AI 프로젝트에 적용"],
        en:["Studied and implemented deep learning models (CNN, ResNet)","Participated in technical study sessions and project-based collaboration","Applied theoretical knowledge to small-scale AI projects"]
      },
      take:{ko:"AI·딥러닝 기초 강화, 동료 개발자와의 협업 경험, 이론을 실제 프로젝트에 적용하는 자신감",en:"Stronger AI/deep-learning foundations, collaboration with peer developers, and confidence applying theory to practice"},
      tags:["Deep Learning","CNN · ResNet","Community"], photos:["IMG_1209","IMG_3661"]
    },
    {
      org:{ko:"Qualcomm AI Program — UC San Diego",en:"Qualcomm AI Program — UC San Diego"},
      role:{ko:"국제 AI 교육 프로그램 · 3위 수상",en:"International AI Training Program · 3rd Place"},
      period:"2025.01 — 2025.02",
      bullets:{
        ko:["국제 AI 교육 프로그램 참여 (Qualcomm Institute × UCSD)","머신러닝 개념을 학습하고 실제 과제에 적용 — 중고차 가격 예측(Random Forest) 팀 프로젝트","다양한 배경의 학생들과 AI 문제를 함께 해결","프로그램 과정을 브이로그로 제작·업로드"],
        en:["Participated in an international AI training program (Qualcomm Institute × UCSD)","Learned and applied ML concepts in practical tasks — team project predicting used-car listing prices with Random Forest","Collaborated with students from diverse backgrounds on AI-related problems","Produced and published a vlog of the program"]
      },
      take:{ko:"글로벌 협업 경험, 기술 아이디어를 발표·토론하는 능력, 데이터 처리와 문제 해결 역량 강화",en:"Global collaboration experience, presenting and discussing technical ideas, and stronger data-processing and problem-solving skills"},
      tags:["Qualcomm","UCSD","Machine Learning"], photos:["IMG_0063","IMG_0137","IMG_0172"]
    }
  ],
  projects: [
    {cat:"ai",status:"done",emoji:"👚",github:"https://github.com/Re-Closet",title:{ko:"ReCloset — AI 기반 의류 의사결정 시스템",en:"ReCloset — AI-driven Clothing Decision System"},
     desc:{ko:"업로드한 의류 이미지를 AI로 분석해 상태를 판단하고, 재활용·활용 방향을 제안하는 지속가능 패션 서비스.",en:"A sustainable-fashion service that analyzes uploaded clothing images, judges their condition, and recommends how to reuse or recycle them."},
     tags:["Computer Vision","CNN","RoboFlow","Python"],
     notion:"https://amber-walker-b93.notion.site/ReCloset-AI-driven-Clothing-Decision-System-33463ea5d8e98050af3cdf5fb5f74175",
     links:[{l:"AI model repo",u:"https://github.com/Re-Closet/ReCloset-AI-Image"},{l:"Demo video",u:"https://www.youtube.com/watch?v=gpX1sbQDVzY"}],
     detail:{
       problem:{ko:"의류 폐기 증가로 환경 문제가 심화되지만, 사용자는 옷을 버릴지 재사용할지 판단하기 어렵고 기존 서비스에는 이미지 기반 판단 기능이 부족했습니다.",en:"Clothing waste keeps growing, yet people struggle to decide whether to discard or reuse an item, and existing services lacked image-based judgment."},
       solution:{ko:"의류 이미지를 입력받아 CNN 기반 모델로 상태를 분석하고, 결과를 바탕으로 재활용 또는 활용 방향을 제안하는 시스템을 설계했습니다.",en:"Designed a system that takes a clothing image, analyzes its condition with a CNN-based model, and suggests a reuse or recycling path."},
       role:{ko:["의류 이미지 분석 모델 구현 및 테스트","입력 이미지 → 모델 처리 → 결과 도출 파이프라인 구성","프로젝트 흐름을 구조화한 발표 자료 제작 및 발표"],en:["Implemented and tested the clothing-image analysis model","Built the image → model → result pipeline","Structured the project story and delivered the final presentation"]},
       result:{ko:"이미지 기반 의류 분석 기능을 구현하고 AI 모델을 실제 서비스 구조에 적용한 경험을 확보했습니다.",en:"Shipped image-based clothing analysis and gained experience putting an AI model inside a real service structure."},
       learned:{ko:"이미지 AI 모델을 실제 문제에 적용하는 경험, 그리고 AI 결과를 사용자에게 전달하는 방식의 중요성.",en:"Applying image AI to a real problem, and how much the way results are communicated to users matters."}
     }},
    {cat:"ai",status:"done",emoji:"🚗",featured:true,github:"https://github.com/wis-hyun/disable_parking",title:{ko:"장애인 주차구역 불법 주정차 감지",en:"Disabled Parking Violation Detection"},
     desc:{ko:"YOLOv8 객체 탐지와 ROI 기반 공간 추론을 결합해 차량·주차구역·장애인 표식의 관계로 불법 주정차를 자동 판별하는 파이프라인.",en:"Combines YOLOv8 detection with ROI-based spatial reasoning to classify parking as OUTSIDE / LEGAL / ILLEGAL from vehicle, zone and disabled-sign relations."},
     tags:["YOLOv8","OpenCV","Spatial Reasoning","Python"],
     notion:"https://amber-walker-b93.notion.site/Disable-Parking-Project-33463ea5d8e9802fa18dfbee312df915",links:[],
     detail:{
       problem:{ko:"도심 불법 주정차는 교통 혼잡과 안전 문제를 일으키지만, 기존 단속은 인력 의존도가 높고 실시간 대응이 어렵습니다.",en:"Illegal parking causes congestion and safety issues, but enforcement is labor-intensive and hard to do in real time."},
       solution:{ko:"객체 탐지 모델로 차량과 주차 금지 구역을 인식하고, ROI 내 차량 존재 여부와 차량–장애인 표식의 위치 관계로 합법/불법 여부를 판단하는 시스템을 설계했습니다.",en:"Detect vehicles and no-parking zones, then decide legality from ROI occupancy and the spatial relation between the vehicle and the disabled sign."},
       role:{ko:["YOLOv8 기반 차량·장애인 표식 검출 모델 구성 및 실험","객체 위치 정보를 활용한 ROI 점유 판단 로직 구현","객체 간 관계 기반 의사결정(OUTSIDE / LEGAL / ILLEGAL) 로직 설계"],en:["Configured and tested YOLOv8 detection for vehicles and disabled signs","Implemented ROI occupancy logic from object positions","Designed the relation-based decision logic (OUTSIDE / LEGAL / ILLEGAL)"]},
       result:{ko:"차량 탐지와 주차구역 인식을 통한 불법 주정차 판단 기능을 구현했습니다.",en:"Delivered a working violation-detection pipeline on top of detection results."},
       learned:{ko:"YOLO 구조와 활용 방식, 이미지 처리 + 객체 탐지를 결합한 시스템 설계, 모델 출력 위의 rule-based 판단 로직 설계.",en:"How YOLO works in practice, designing a system that combines image processing and detection, and building rule-based decisions on model outputs."}
     }},
    {cat:"ai",status:"done",emoji:"🚕",github:"https://github.com/wis-hyun/2026-autocar-competition",title:{ko:"자율주행 경진대회 (Autocar Competition)",en:"Autocar Competition"},
     desc:{ko:"카메라 입력으로 주행 환경을 인식하고 이동 방향과 행동을 결정하는 인식 → 판단 → 제어 자율주행 로직 구현.",en:"Perception → decision → control: camera-based environment recognition that decides the vehicle's direction and actions."},
     tags:["Autonomous Driving","OpenCV","Real-time CV"],
     notion:"https://amber-walker-b93.notion.site/Autocar-Competition-33463ea5d8e980bda185fa15bcb533de",links:[],
     detail:{
       problem:{ko:"자율주행 차량은 주변 환경을 실시간으로 인식하고 적절한 주행 판단을 내려야 하며, 단순 제어가 아닌 인식·판단·제어의 통합 시스템이 필요합니다.",en:"An autonomous car must perceive its surroundings in real time and make driving decisions — an integrated perception-decision-control system, not simple control."},
       solution:{ko:"카메라 입력을 기반으로 주행 환경을 인식하고, 차선·경로를 바탕으로 이동 방향과 행동을 결정하는 자율주행 시스템 구조를 설계했습니다.",en:"Designed a driving system that recognizes the environment from camera input and decides direction and behavior from lanes and paths."},
       role:{ko:["환경 인식 결과로 차량 행동을 결정하는 자율주행 알고리즘 설계·구현","OpenCV를 활용한 실시간 영상 처리 및 데이터 활용","이동 방향·동작을 결정하는 rule-based 주행 판단 로직 개발"],en:["Designed and implemented the driving algorithm that maps perception to actions","Real-time video processing with OpenCV","Developed the rule-based decision logic for direction and motion"]},
       result:{ko:"카메라 기반 환경 인식과 주행 판단 기능을 구현하고, 실제 환경에서 동작하는 AI 시스템 설계 경험을 얻었습니다.",en:"Built camera-based perception and driving decisions, and gained experience designing an AI system that runs in the real world."},
       learned:{ko:"실시간 CV 시스템 구현, 인식 결과를 제어 로직으로 잇는 방법, 단일 모델이 아닌 전체 시스템 흐름 설계의 중요성.",en:"Building real-time CV systems, connecting perception to control, and why whole-system design matters more than a single model."}
     }},
    {cat:"ai",status:"done",emoji:"🕸️",featured:true,title:{ko:"BagStrap — LLM × Vision 차세대 크롤링 파이프라인",en:"BagStrap — LLM × Vision Next-gen Crawling Pipeline"},
     desc:{ko:"LLM과 Vision 모델로 웹페이지를 '사람처럼 이해'해 URL 이해 → HTML 단순화 → 의미 태깅 → JSON 구조화까지 자동화한 end-to-end 정보 추출 시스템.",en:"An end-to-end extraction system that 'reads' web pages like a human — URL understanding → HTML simplification → semantic tagging → structured JSON — using LLM and vision models."},
     tags:["LLM","Vision","CrewAI","Agents","Streamlit"],
     notion:"https://amber-walker-b93.notion.site/BagStrap-Intern-33463ea5d8e9800a8412e70984a2d9b7",links:[],
     detail:{
       problem:{ko:"기존 HTML 크롤링은 구조 변화, SPA, 크롤링 차단으로 안정적인 추출이 어렵고, 페이지마다 구조가 달라 JSON으로 정형화하는 과정에서 오류가 잦습니다.",en:"DOM-based crawling breaks on layout changes, SPAs and blocking, and every site's structure differs, so converting to structured JSON is error-prone."},
       solution:{ko:"URL → HTML → 의미 분석 → 구조화 → JSON 생성 전 과정을 LLM·Vision 에이전트로 자동화하고, HTML이 깨지는 페이지는 스크린샷 기반으로 정보를 추출합니다.",en:"Automated URL → HTML → semantic analysis → structuring → JSON with LLM/vision agents, falling back to screenshot-based extraction when HTML breaks."},
       role:{ko:["HTML Simplification 모듈 구현 (LLM 친화적 구조로 변환)","Vision 기반 크롤링 실험으로 추출 안정성 개선","URL 패턴으로 페이지 유형(교수·연구실·논문 등)을 분류하는 URL 이해 에이전트 설계","계층적 Semantic Tagging 구조 설계·개선","HTML / TEXT / JSON / VISION 입력별 성능을 비교하는 Input-Bench 평가 시스템 구축","nextcrawl · summarize · input-bench 모듈 구조 설계 및 GitHub 통합 관리"],en:["Built the HTML Simplification module (LLM-friendly structure)","Ran vision-based crawling experiments to improve extraction stability","Designed the URL-understanding agent that classifies page types (professor, lab, paper…)","Designed and refined the hierarchical semantic-tagging schema","Built Input-Bench to compare performance across HTML / TEXT / JSON / VISION inputs","Structured and integrated the nextcrawl · summarize · input-bench modules on GitHub"]},
       result:{ko:"웹페이지를 자동 수집해 JSON으로 구조화하는 end-to-end 파이프라인을 구축하고, 입력 방식에 따른 성능 차이를 정량 비교할 수 있는 평가 체계를 구현했습니다.",en:"Delivered an end-to-end pipeline that collects pages and structures them as JSON, plus an evaluation framework that quantifies performance by input type."},
       learned:{ko:"크롤링의 한계를 LLM·Vision으로 확장하는 접근, AI를 파이프라인으로 설계하는 경험, 문제 정의 → 시스템 설계 → 실험 → 평가로 이어지는 연구 흐름.",en:"Extending crawling with LLM and vision, designing AI as a pipeline rather than a single feature, and the full research loop from problem definition to evaluation."}
     }},
    {cat:"ai",status:"done",emoji:"🇺🇸",github:"https://github.com/wis-hyun/Qualcomm-Institute",title:{ko:"Qualcomm × UCSD — 중고차 가격 예측",en:"Qualcomm × UCSD — Used-Car Price Prediction"},
     desc:{ko:"차량 속성 데이터로 중고차 가격을 예측하는 머신러닝 프로젝트. Random Forest·MLP 등 모델을 비교해 최적 모델을 도출 — Qualcomm Institute AI Development Project 3위.",en:"ML project predicting used-car prices from vehicle attributes; compared Random Forest, MLP and more to pick the best model — 3rd place, Qualcomm Institute AI Development Project."},
     tags:["Scikit-learn","Random Forest","Feature Engineering"],
     notion:"https://amber-walker-b93.notion.site/Qualcomm-Project-33463ea5d8e980cda085dc33120d75c5",links:[],
     detail:{
       problem:{ko:"중고차 가격은 연식·주행거리·연료 등 다양한 변수에 비선형적으로 좌우되어 규칙 기반 접근으로는 정확한 예측이 어렵습니다.",en:"Used-car prices depend non-linearly on many variables (age, mileage, fuel…), so rule-based approaches fall short."},
       solution:{ko:"여러 머신러닝 회귀 모델을 적용하고 성능을 비교해 최적의 예측 모델을 선정했습니다.",en:"Applied several ML regression models, compared their performance and selected the best predictor."},
       role:{ko:["결측치 처리, 범주형 인코딩 등 데이터 전처리 및 feature engineering","Random Forest, MLP 등 모델 적용 및 성능 비교","MAE 등 지표 기반 모델 평가 및 결과 해석","분석 과정과 결과를 구조화한 발표 자료 제작 및 발표"],en:["Preprocessing and feature engineering (missing values, categorical encoding)","Applied and compared Random Forest, MLP and other models","Evaluated with MAE and interpreted results","Structured and presented the analysis"]},
       result:{ko:"모델별 성능 차이를 분석해 최적 모델을 도출하고, 데이터 기반 의사결정 과정을 경험했습니다.",en:"Analyzed performance differences, chose the best model and practiced data-driven decision making."},
       learned:{ko:"전처리와 feature engineering의 중요성, 모델 선택이 결과에 미치는 영향, 비교와 분석을 통한 접근.",en:"Why preprocessing and feature engineering matter, how model choice shapes results, and the value of comparison over single-shot modeling."}
     }},
    {cat:"side",status:"done",emoji:"🕒",github:"https://github.com/wis-hyun/TimeSync",title:{ko:"TimeSync — 시차 넘어 만날 시간 찾기",en:"TimeSync — Meeting Times Across Time Zones"},
     desc:{ko:"하와이 DTS에서 만난 각국 친구들과 계속 연락하고 싶어 만든 작은 웹앱. 도시별 실시간 시계, 드래그로 가능 시간 표시, 겹치는 시간 히트맵과 Best Times 추천을 Firebase로 실시간 동기화합니다.",en:"A small side project born from DTS in Hawaii, to keep in touch with friends around the world. Live city clocks, drag-to-mark availability, an overlap heatmap and Best Times ranking, synced in real time with Firebase."},
     tags:["Side project","JavaScript","Firebase","Intl API"],notion:"",links:[],detail:null},
    {cat:"data",status:"done",emoji:"💹",github:"https://github.com/wis-hyun/2026-tableu-bootcamp",title:{ko:"서울 상권 분석 & Tableau 시각화",en:"Seoul Commercial Area Analysis & Tableau Visualization"},
     desc:{ko:"서울 상권 데이터를 탐색·분석하고, 핵심 지표 기반 인터랙티브 대시보드로 데이터 스토리텔링을 구현한 Tableau 프로젝트.",en:"Explored Seoul commercial-district data and built an interactive Tableau dashboard that tells the story behind the key metrics."},
     tags:["Tableau","Data Analysis","Visualization"],
     notion:"https://amber-walker-b93.notion.site/Seoul-Commercial-Area-Analysis-Tableu-Visualization-33463ea5d8e9802e9136ca16dd6a8042",links:[],
     detail:{
       problem:{ko:"데이터는 있지만 수치 나열만으로는 의미 있는 인사이트를 도출하거나 전달하기 어렵습니다.",en:"The data existed, but raw numbers alone could not surface or communicate meaningful insight."},
       solution:{ko:"Tableau로 데이터를 시각적으로 분석하고 핵심 지표 기반 대시보드를 구성해 데이터의 흐름과 패턴을 직관적으로 전달했습니다.",en:"Analyzed the data visually in Tableau and built a metric-driven dashboard that conveys flow and patterns at a glance."},
       role:{ko:["데이터 구조 이해 및 분석용 전처리","사용자 중심의 Tableau 대시보드 설계·구현","패턴 분석을 통한 인사이트 도출 및 해석"],en:["Understood the data structure and preprocessed it for analysis","Designed and built a user-centered Tableau dashboard","Extracted and interpreted insights from patterns"]},
       result:{ko:"직관적으로 이해할 수 있는 대시보드를 구현하고 데이터 기반 의사결정을 지원할 수 있는 결과를 도출했습니다.",en:"Delivered an intuitive dashboard that supports data-driven decisions."},
       learned:{ko:"시각화의 전달력, 사용자 관점에서 분석 결과를 표현하는 방법, 데이터를 '스토리'로 만드는 경험.",en:"The power of visualization, presenting results from the user's point of view, and turning data into a story."}
     }},
    {cat:"data",status:"done",emoji:"⚡",featured:true,github:"https://github.com/wis-hyun/AWS-project",title:{ko:"AWS 스마트팩토리 전력·탄소 예측",en:"AWS SmartFactory Electricity & Carbon Prediction"},
     desc:{ko:"AWS(S3·SageMaker)에서 대용량 시계열을 처리하고 ARIMA·LSTM으로 전력 사용량·요금·탄소 배출량을 예측, Streamlit 대시보드까지 잇는 end-to-end 시스템.",en:"Processes large time-series data on AWS (S3, SageMaker), forecasts energy use, cost and carbon emissions with ARIMA/LSTM, and serves results in a Streamlit dashboard."},
     tags:["AWS SageMaker","LSTM · ARIMA","PyTorch","Streamlit"],
     notion:"https://amber-walker-b93.notion.site/AWS-SmartFactory-Electronic-Prediction-Project-33463ea5d8e980ce9ab2e0e36edddc9c",links:[],
     detail:{
       problem:{ko:"공장 단위 전력 데이터는 대용량 시계열이라 처리가 어렵고, 비용과 탄소 배출량까지 함께 고려해야 하며 실시간 모니터링·이상 탐지가 어렵습니다.",en:"Factory-level power data is large time-series data; cost and carbon must be considered together, and real-time monitoring is hard."},
       solution:{ko:"S3·SageMaker 기반 처리 환경을 구축하고 시계열 전처리·feature engineering 후 ARIMA·LSTM으로 예측, SageMaker Endpoint로 서빙하고 Streamlit으로 시각화했습니다.",en:"Built an S3/SageMaker pipeline, engineered time-series features, forecast with ARIMA and LSTM, served via a SageMaker endpoint and visualized in Streamlit."},
       role:{ko:["클라우드 환경에서 대용량 시계열 데이터 수집·활용","시간 흐름에 따른 패턴 분석 및 모델 입력 데이터 구성","예측 결과를 전달하는 Streamlit 대시보드 구현"],en:["Collected and used large time-series data in the cloud","Analyzed temporal patterns and built model inputs","Implemented the Streamlit dashboard that presents forecasts"]},
       result:{ko:"전력·요금·탄소 배출량을 통합 예측하는 시스템을 구축하고(MAE 약 65), 데이터 → 모델 → 배포 → 시각화 파이프라인을 완성했습니다.",en:"Built an integrated forecasting system (MAE ≈ 65) with a full data → model → deploy → visualize pipeline."},
       learned:{ko:"클라우드 기반 대용량 처리, 시계열 예측 모델 설계, AI 모델을 실제 서비스 형태로 연결하는 경험.",en:"Cloud-scale data handling, designing time-series forecasters, and wiring a model into a real service."}
     }},
    {cat:"data",status:"done",emoji:"👥",github:"https://github.com/wis-hyun/We-meet-Project",title:{ko:"We-meet — 대학생 × 공익단체 매칭 플랫폼",en:"We-meet — Student × Nonprofit Matching Platform"},
     desc:{ko:"설문과 실제 수요 데이터를 바탕으로 관심사·전공 기반 추천(Jaccard 태그 유사도 + 키워드 매칭)으로 대학생과 공익단체를 연결하는 플랫폼 프로토타입.",en:"A prototype that matches students with nonprofits using interest/major-based recommendations (Jaccard tag similarity + keyword matching) built from survey and demand data."},
     tags:["Recommendation","Jaccard","JSON","HTML/CSS/JS"],
     notion:"https://amber-walker-b93.notion.site/We-meet-Project-33463ea5d8e9805b9c67d5b957633ff4",
     links:[],
     detail:{
       problem:{ko:"대학생은 실무 경험이, 공익단체는 인력이 부족합니다. 양측 모두 수요는 있지만 연결 구조가 없었습니다.",en:"Students lack hands-on experience; nonprofits lack people. Both sides have demand but no bridge."},
       solution:{ko:"관심사 기반 추천, 태그 유사도 분석, 텍스트 키워드 매칭, 탐색형 카드 UI를 결합한 맞춤형 공익활동 추천 플랫폼을 설계했습니다.",en:"Designed a personalized recommendation platform combining interest-based suggestions, tag similarity, keyword matching and an explorable card UI."},
       role:{ko:["설문조사 설계 및 데이터 수집, 사용자 니즈 분석과 문제 정의","유사도 + 키워드 기반 추천 알고리즘 설계","JSON 기반 데이터 구조 설계","HTML/CSS/JS 프론트엔드 UI 구현 및 플랫폼 기획"],en:["Designed the survey, collected data, analyzed needs and defined the problem","Designed the similarity + keyword recommendation algorithm","Designed the JSON data structure","Built the HTML/CSS/JS front end and planned the platform"]},
       result:{ko:"공익활동 매칭 플랫폼 프로토타입과 사용자 맞춤 추천 기능을 구현했습니다.",en:"Shipped a working prototype with personalized recommendations."},
       learned:{ko:"데이터 기반 문제 정의와 해결, 추천 시스템 설계, 사용자 중심 서비스 기획.",en:"Data-driven problem definition, recommender design, and user-centered product planning."}
     }},
    {cat:"data",status:"done",emoji:"🪦",github:"https://github.com/wis-hyun/Bigdata-idea",title:{ko:"수도권 화장시설 건립 입지분석",en:"Site Analysis for Crematorium Facilities in the Seoul Metro Area"},
     desc:{ko:"공공데이터와 GIS 공간 분석으로 법적 거리 기준·NIMBY 요소까지 반영한 다중 기준 입지 적합도 평가. 약 30개 후보지 중 최종 2곳 도출, Kakao Map 인터랙티브 시각화.",en:"Multi-criteria site-suitability analysis with public data and GIS, reflecting legal distance rules and NIMBY factors; narrowed ~30 candidates to 2 and visualized them on an interactive Kakao Map."},
     tags:["GeoPandas","Shapely","GIS","Kakao Map API"],
     notion:"https://amber-walker-b93.notion.site/33463ea5d8e98047ba22fbd3ca30101b",links:[],
     detail:{
       problem:{ko:"인구의 약 50%가 몰린 수도권에 화장시설이 부족해 장례 지연과 비용 증가가 발생하고, 혐오시설 인식 때문에 입지 선정 시 지역 갈등(NIMBY)이 생깁니다.",en:"Half of Korea's population lives in the metro area, yet crematoria are scarce — causing funeral delays and costs — and siting triggers NIMBY conflicts."},
       solution:{ko:"법적 기준(주거지·학교 500m, 도로·하천 300m) 버퍼와 인구·사망자 수·시설 분포 레이어를 결합한 다중 기준 분석으로 정규화·가중치 기반 적합도 점수를 산출했습니다.",en:"Combined legal buffers (500 m from housing/schools, 300 m from roads/rivers) with population, mortality and facility layers into a normalized, weighted suitability score."},
       role:{ko:["통계청·서울시·국토정보 등 공공데이터 수집 및 정제","GeoPandas·Shapely로 buffer 생성 및 overlay 연산 구현","거리 제한을 반영한 입지 가능 영역 도출 및 적합도 평가 모델 설계","Kakao Map API 기반 웹 지도 시각화 구현"],en:["Collected and cleaned public datasets (KOSTAT, Seoul, national geo data)","Implemented buffer and overlay operations with GeoPandas/Shapely","Derived feasible zones under distance rules and designed the suitability model","Built the web map visualization with the Kakao Map API"]},
       result:{ko:"남양주시 수동면을 최적 입지 후보로 도출하고, 약 30개 후보지 중 조건을 만족하는 최종 2곳을 선정해 타당성을 정량·공간적으로 설명했습니다.",en:"Identified Sudong-myeon (Namyangju) as the top candidate and narrowed ~30 sites to 2 with quantitative, spatial justification."},
       learned:{ko:"GIS 분석의 실제 적용, 법적·사회적 조건을 반영한 의사결정 모델 설계, 데이터 기반 정책 제안으로 확장하는 문제 해결.",en:"Applying GIS for real decisions, modeling legal and social constraints, and extending analysis into policy proposals."}
     }}
  ],
  awards: [
    {place:2,title:{ko:"데이터 분석 & 시각화 — 2위",en:"Data Analysis & Visualization — 2nd Place"},org:{ko:"빅데이터 산업진흥 서포터즈",en:"Big-Data Industry Supporter"},date:"2026.01"},
    {place:2,title:{ko:"OUTSTANDERS 프로젝트 인턴 — 2위",en:"'OUTSTANDERS' Project Intern — 2nd Place"},org:{ko:"OUTSTANDERS 산학협력",en:"OUTSTANDERS industry-academic program"},date:"2025.12"},
    {place:2,title:{ko:"AI 데이터 분석 프로젝트 — 2위",en:"AI Data Analysis Project — 2nd Place"},org:{ko:"AI 데이터 분석 경진",en:"AI data analysis competition"},date:"2025.05"},
    {place:3,title:{ko:"Qualcomm Institute AI Development Project — 3위",en:"Qualcomm Institute AI Development Project — 3rd Place"},org:{ko:"Qualcomm Institute × UC San Diego",en:"Qualcomm Institute × UC San Diego"},date:"2025.02"},
    {place:2,title:{ko:"OUTTA AI 프로젝트 — 2위",en:"OUTTA AI Project — 2nd Place"},org:{ko:"OUTTA",en:"OUTTA"},date:"2024.08"}
  ],
  certs: [
    {abbr:"AZ-900",name:"Microsoft Certified: Azure Fundamentals",issuer:"Microsoft",date:"2026.02",tag:"Cloud"},
    {abbr:"AI-900",name:"Microsoft Certified: Azure AI Fundamentals",issuer:"Microsoft",date:"2026.02",tag:"AI"},
    {abbr:"AIF",name:"AWS Certified AI Practitioner",issuer:"Amazon Web Services",date:"2025.04",tag:"AI"},
    {abbr:"KNIME",name:"KNIME Certified",issuer:"KNIME AG",date:"—",tag:"Tool"},
    {abbr:"OPIc IH",name:"OPIc — Intermediate High (IH)",issuer:"ACTFL",date:"2026.10",tag:"English"}
  ],
  skills: [
    {h:{ko:"메인 스택",en:"Main stack"},lv:[["Python",5],["PyTorch",4],["Data preprocessing",4],["Pandas · NumPy",4],["SQL",3]]},
    {h:{ko:"AI / ML",en:"AI / ML"},chips:["CNN · ResNet","YOLO · OpenCV","LLM Prompting & Evaluation","Scikit-learn","Hugging Face","Random Forest"]},
    {h:{ko:"데이터 & 클라우드",en:"Data & Cloud"},chips:["AWS","Azure","Tableau","KNIME","Crawling","GIS / Spatial"]},
    {h:{ko:"강점",en:"Strengths"},chips:{ko:["협업 & 소통 능력","문제 정의 및 단순화","기록 및 정리 능력","열정 및 성실함","영어 커뮤니케이션"],en:["Collaboration & communication","Problem definition & simplification","Documentation & organization","Passion & diligence","English communication"]}}
  ],
  /* 첫 화면 — 연구 분야 4칸 */
  areas: [
    {h:"Focus",items:["Trustworthy AI","LLM Evaluation & Benchmarking"]},
    {h:"Safety & Trust",items:["AI Ethics","AI Safety & Alignment"]},
    {h:"Systems",items:["AI Agents","Large Language Models"]},
    {h:"Background",items:["Computer Vision","Multimodal AI","Big Data"]}
  ],
  /* 첫 화면 — 최근 소식 (최신순) */
  news: [
    {d:"2026.10",ko:"숙명여대 자연어처리 연구실(SMU-NLP Lab)에서 연구 인턴으로 활동을 시작했습니다.",en:"Started as a research intern at SMU-NLP Lab, Sookmyung Women's University.",href:"about.html#experience"},
    {d:"2026.10",ko:"OPIc IH(Intermediate High) 취득.",en:"Earned OPIc IH (Intermediate High).",href:"about.html#awards"},
    {d:"2026.09",ko:"하와이 University of the Nations DTS 과정(4월~9월)을 마쳤습니다.",en:"Completed the DTS program at University of the Nations, Hawaii (Apr–Sep).",href:"about.html#experience"},
    {d:"2026.02",ko:"Microsoft Azure Fundamentals · Azure AI Fundamentals 취득.",en:"Earned Microsoft Azure Fundamentals and Azure AI Fundamentals.",href:"about.html#awards"},
    {d:"2026.01",ko:"데이터 분석 & 시각화 경진대회 2위.",en:"2nd place, Data Analysis & Visualization competition.",href:"about.html#awards"},
    {d:"2025.12",ko:"OUTSTANDERS 산학협력 프로젝트 2위 · 서울대 빅데이터연구원 학생 인턴 시작.",en:"2nd place in the OUTSTANDERS project; started as a student intern at SNU Big-Data Institute.",href:"about.html#experience"}
  ],
  updated:"2026.11"
};
