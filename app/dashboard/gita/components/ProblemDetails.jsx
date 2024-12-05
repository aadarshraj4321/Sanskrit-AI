// import React from "react";

// export default function ProblemDetails({
//   language,
//   problem,
//   setProblem,
//   subProblem,
//   setSubProblem,
//   detail,
//   setDetail,
// }) {
//   const translations = {
//     en: { mainProblem: "Main Problem ", subProblem: "Sub Problem ", details: "Details " },
//     hi: { mainProblem: "मुख्यसमस्या ", subProblem: "उपसमस्या ", details: "विवरण " },
//   };

//   const options = {
//     en: {
//       Relationships: ["Miscommunication", "TrustIssues", "Breakup", "Conflict"],
//       Suicidal: ["SelfHarm", "EndOfTheRoad", "EmotionalPain"],
//       Dream: ["Ambition", "Nightmare", "LucidDream", "DreamOfSuccess"],
//       Distraction: ["LoveBreakup", "SocialMedia", "TimeManagement", "Overthinking"],
//       Family: ["StudyPressure", "ParentExpectations", "SiblingRivalry", "FamilyConflicts"],
//     },
//     hi: {
//       रिश्ते: ["गलतफहमी", "विश्वासकीकम", "टूटेरिश्ते", "विवाद"],
//       आत्महत्या: ["निराशाजनकअनुभूति", "स्वयंकोहानि", "रास्ताकअंत", "भावनात्मकदर्द"],
//       सपना: ["महत्वाकांक्षा", "दुस्वप्न", "स्वप्ननिर्देश", "सफलतास्वप्न"],
//       विघटन: ["प्रेमब्रेकअप", "सोशलमीडिया", "समयप्रबंधन", "अत्यधिकसोच"],
//       परिवार: ["अध्यानदबाव", "माता-पिताकीअपेक्षाएँ", "भाई-बहनकीप्रतिस्पर्धा", "परिवारिकविवाद"],
//     },
//   };

//   const details = {
//     en: {
//       Miscommunication: ["Listen Actively", "Seek Clarification", "Avoid Assumptions"],
//       TrustIssues: ["Build Trust Gradually", "Seek Counseling", "Open Communication"],
//       Breakup: ["Let Go", "Focus On SelfCare", "Seek Support"],
//       Conflict: ["Find Common Ground", "Compromise", "Seek Mediation"],
//       SelfHarm: ["Reach Out for Support", "Replace Negative Behaviors", "Practice Self-Care"],
//       EndOfTheRoad: ["Talk to Loved Ones", "Seek Therapy", "Reevaluate Priorities"],
//       EmotionalPain: ["Acknowledge Feelings", "Practice Mindfulness", "Seek Counseling"],
//       Ambition: ["Set Goals", "Stay Motivated", "Overcome Obstacles"],
//       Nightmare: ["Face Your Fears", "Seek Rest", "Avoid Stressful Situations"],
//       LucidDream: ["Control Your Dreams", "StayAware", "Practice Meditation"],
//       DreamOfSuccess: ["Visualize Success", "Plan Your Path", "Stay Focused"],
//       LoveBreakup: ["Allow Time for Healing", "Talk to Someone You Trust", "Engage in Activities You Enjoy"],
//       SocialMedia: ["Take Breaks", "Limit Usage", "Focus on Real-Life Connections"],
//       TimeManagement: ["Set Priorities", "Use a Planner", "Avoid Procrastination"],
//       Overthinking: ["Practice Mindfulness", "Focus on the Present", "Seek Perspective"],
//       StudyPressure: ["Take Breaks", "Create a Schedule", "Talk to a Mentor"],
//       ParentExpectations: ["Have an Honest Conversation", "Set Boundaries", "Focus on Your Goals"],
//       SiblingRivalry: ["Communicate Openly", "Find Common Interests", "Respect Each Other's Space"],
//       FamilyConflicts: ["Encourage Open Dialogue", "Set Healthy Boundaries", "Seek Family Counseling"],
//     },
//     hi: {
//       गलतफहमी: ["सक्रियरोपसेसुनें", "स्पष्टीकरणमांगें", "अनुमानोंसेबचें"],
//       विश्वासकीकम: ["विश्वासकोधीरे-धीरेबढ़ाएं", "मददप्राप्तकरें", "खुलकरसंवादकरें"],
//       टूटेरिश्ते: ["छोड़दें", "स्वयंपरध्यानदें", "समर्थनप्राप्तकरें"],
//       विवाद: ["साझा विचारधाराप्राप्तकरें", "समझौता करें", "मध्यस्थतामांगें"],
//       निराशाजनकअनुभूति: ["किसीसेबातकरें", "पेशेवरमददप्राप्तकरें", "छोटेलक्ष्यपरफोकसकरें"],
//       स्वयंकोहानि: ["समर्थनकेलियेसंपर्ककरें", "नकरात्मकव्यवहारकोबदले", "स्वयंकीदेखभालकरें"],
//       रास्ताकअंत: ["प्रियजनोंसेबातकरें", "चिकित्सीयसहायतासुने", "प्राथमिकताआंकलें"],
//       भावनात्मकदर्द: ["भावनाओंकोस्वीकारकरें", "माइंडफुलनेसअभ्यासकरें", "मनोचिकित्सकसेमददले"],
//       महत्वाकांक्षा: ["लक्ष्यनिर्धारणकरें", "प्रेरितरहें", "अवरोधोंकोदूरकरें"],
//       दुस्वप्न: ["अपनेभयोंका सामना करें", "आराम करें", "तनावपूर्णपरिस्थितियोंसेबचें"],
//       स्वप्ननिर्देश: ["अपनेस्वप्नोंकोनियंत्रितकरें", "जागरूकरहें", "ध्यानअभ्यासकरें"],
//       सफलतास्वप्न: ["सफलता की कल्पना करें", "अपना रास्ता योजना बनाएं", "ध्यान केंद्रित रखें"],
//       प्रेमब्रेकअप: ["सभी समय को ठीक करने दें", "किसीसेबात करें", "वह गतिविधियाँ करें जो आपको पसंद हों"],
//       सोशलमीडिया: ["ब्रेकलें", "उपयोगसीमा करें", "वास्तविक-संपर्कोंपरफोकसकरें"],
//       समयप्रबंधन: ["प्राथमिकताएँनिर्धारणकरें", "योजनाकारकें", "काममेंअड़चनें न आने दें"],
//       अत्यधिकसोच: ["माइंडफुलनेसअभ्यास करें", "वर्तमानपरफोकस करें", "परिप्रेक्ष्य प्राप्त करें"],
//       अध्यानदबाव: ["ब्रेक लें", "एक कार्यक्रम बनाएं", "एक मेंटर से बात करें"],
//       मातापिताकीअपेक्षाएँ: ["ईमानदारी से बातचीत करें", "सीमाएँ निर्धारित करें", "अपने लक्ष्य पर ध्यान केंद्रित रखें"],
//       भाईबहनकीप्रतिस्पर्धा: ["खुलकर संवाद करें", "साझी रुचियां खोजें", "एक-दूसरे के स्थान का सम्मान करें"],
//       परिवारिकविवाद: ["खुली बातचीत को बढ़ावा दें", "स्वस्थ सीमाएँ निर्धारित करें", "परिवार चिकित्सा का सहारा लें"],
//     },
//   };

//   return (
//     <>
//       <div className="w-full">
//         <h3 className="font-bold text-2xl text-white text-center">{translations[language].mainProblem}</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//           {Object.keys(options[language]).map((key) => (
//             <button
//               key={key}
//               onClick={() => setProblem(key)}
//               className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${problem === key ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//             >
//               {key}
//             </button>
//           ))}
//         </div>
//       </div>

//       {problem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].subProblem}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {options[language][problem].map((sub) => (
//               <button
//                 key={sub}
//                 onClick={() => setSubProblem(sub)}
//                 className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${subProblem === sub ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {subProblem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].details}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {details[language][subProblem].map((detailOption) => (
//               <button
//                 key={detailOption}
//                 onClick={() => setDetail(detailOption)}
//                 className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${detail === detailOption ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//               >
//                 {detailOption}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }






// import React, { useMemo } from "react";

// export default function ProblemDetails({
//   language,
//   problem,
//   setProblem,
//   subProblem,
//   setSubProblem,
//   detail,
//   setDetail,
// }) {
//   const translations = useMemo(() => ({
//     en: { mainProblem: "Main Problem ", subProblem: "Sub Problem ", details: "Details " },
//     hi: { mainProblem: "मुख्यसमस्या ", subProblem: "उपसमस्या ", details: "विवरण " },
//   }), []);

//   const options = useMemo(() => ({
//     en: {
//       Relationships: ["Miscommunication", "TrustIssues", "Breakup", "Conflict"],
//       Suicidal: ["SelfHarm", "EndOfTheRoad", "EmotionalPain"],
//       Dream: ["Ambition", "Nightmare", "LucidDream", "DreamOfSuccess"],
//       Distraction: ["LoveBreakup", "SocialMedia", "TimeManagement", "Overthinking"],
//       Family: ["StudyPressure", "ParentExpectations", "SiblingRivalry", "FamilyConflicts"],
//     },
//     hi: {
//       रिश्ते: ["गलतफहमी", "विश्वासकीकम", "टूटेरिश्ते", "विवाद"],
//       आत्महत्या: ["निराशाजनकअनुभूति", "स्वयंकोहानि", "रास्ताकअंत", "भावनात्मकदर्द"],
//       सपना: ["महत्वाकांक्षा", "दुस्वप्न", "स्वप्ननिर्देश", "सफलतास्वप्न"],
//       विघटन: ["प्रेमब्रेकअप", "सोशलमीडिया", "समयप्रबंधन", "अत्यधिकसोच"],
//       परिवार: ["अध्यानदबाव", "माता-पिताकीअपेक्षाएँ", "भाई-बहनकीप्रतिस्पर्धा", "परिवारिकविवाद"],
//     },
//   }), []);

//   const details = useMemo(() => ({
//     en: {
//       Miscommunication: ["Listen Actively", "Seek Clarification", "Avoid Assumptions"],
//       TrustIssues: ["Build Trust Gradually", "Seek Counseling", "Open Communication"],
//       Breakup: ["Let Go", "Focus On SelfCare", "Seek Support"],
//       Conflict: ["Find Common Ground", "Compromise", "Seek Mediation"],
//       SelfHarm: ["Reach Out for Support", "Replace Negative Behaviors", "Practice Self-Care"],
//       EndOfTheRoad: ["Talk to Loved Ones", "Seek Therapy", "Reevaluate Priorities"],
//       EmotionalPain: ["Acknowledge Feelings", "Practice Mindfulness", "Seek Counseling"],
//       Ambition: ["Set Goals", "Stay Motivated", "Overcome Obstacles"],
//       Nightmare: ["Face Your Fears", "Seek Rest", "Avoid Stressful Situations"],
//       LucidDream: ["Control Your Dreams", "StayAware", "Practice Meditation"],
//       DreamOfSuccess: ["Visualize Success", "Plan Your Path", "Stay Focused"],
//       LoveBreakup: ["Allow Time for Healing", "Talk to Someone You Trust", "Engage in Activities You Enjoy"],
//       SocialMedia: ["Take Breaks", "Limit Usage", "Focus on Real-Life Connections"],
//       TimeManagement: ["Set Priorities", "Use a Planner", "Avoid Procrastination"],
//       Overthinking: ["Practice Mindfulness", "Focus on the Present", "Seek Perspective"],
//       StudyPressure: ["Take Breaks", "Create a Schedule", "Talk to a Mentor"],
//       ParentExpectations: ["Have an Honest Conversation", "Set Boundaries", "Focus on Your Goals"],
//       SiblingRivalry: ["Communicate Openly", "Find Common Interests", "Respect Each Other's Space"],
//       FamilyConflicts: ["Encourage Open Dialogue", "Set Healthy Boundaries", "Seek Family Counseling"],
//     },
//     hi: {
//       गलतफहमी: ["सक्रियरोपसेसुनें", "स्पष्टीकरणमांगें", "अनुमानोंसेबचें"],
//       विश्वासकीकम: ["विश्वासकोधीरे-धीरेबढ़ाएं", "मददप्राप्तकरें", "खुलकरसंवादकरें"],
//       टूटेरिश्ते: ["छोड़दें", "स्वयंपरध्यानदें", "समर्थनप्राप्तकरें"],
//       विवाद: ["साझा विचारधाराप्राप्तकरें", "समझौता करें", "मध्यस्थतामांगें"],
//       निराशाजनकअनुभूति: ["किसीसेबातकरें", "पेशेवरमददप्राप्तकरें", "छोटेलक्ष्यपरफोकसकरें"],
//       स्वयंकोहानि: ["समर्थनकेलियेसंपर्ककरें", "नकरात्मकव्यवहारकोबदले", "स्वयंकीदेखभालकरें"],
//       रास्ताकअंत: ["प्रियजनोंसेबातकरें", "चिकित्सीयसहायतासुने", "प्राथमिकताआंकलें"],
//       भावनात्मकदर्द: ["भावनाओंकोस्वीकारकरें", "माइंडफुलनेसअभ्यासकरें", "मनोचिकित्सकसेमददले"],
//       महत्वाकांक्षा: ["लक्ष्यनिर्धारणकरें", "प्रेरितरहें", "अवरोधोंकोदूरकरें"],
//       दुस्वप्न: ["अपनेभयोंका सामना करें", "आराम करें", "तनावपूर्णपरिस्थितियोंसेबचें"],
//       स्वप्ननिर्देश: ["अपनेस्वप्नोंकोनियंत्रितकरें", "जागरूकरहें", "ध्यानअभ्यासकरें"],
//       सफलतास्वप्न: ["सफलता की कल्पना करें", "अपना रास्ता योजना बनाएं", "ध्यान केंद्रित रखें"],
//       प्रेमब्रेकअप: ["सभी समय को ठीक करने दें", "किसीसेबात करें", "वह गतिविधियाँ करें जो आपको पसंद हों"],
//       सोशलमीडिया: ["ब्रेकलें", "उपयोगसीमा करें", "वास्तविक-संपर्कोंपरफोकसकरें"],
//       समयप्रबंधन: ["प्राथमिकताएँनिर्धारणकरें", "योजनाकारकें", "काममेंअड़चनें न आने दें"],
//       अत्यधिकसोच: ["माइंडफुलनेसअभ्यास करें", "वर्तमानपरफोकस करें", "परिप्रेक्ष्य प्राप्त करें"],
//       अध्यानदबाव: ["ब्रेक लें", "एक कार्यक्रम बनाएं", "एक मेंटर से बात करें"],
//       मातापिताकीअपेक्षाएँ: ["ईमानदारी से बातचीत करें", "सीमाएँ निर्धारित करें", "अपने लक्ष्य पर ध्यान केंद्रित रखें"],
//       भाईबहनकीप्रतिस्पर्धा: ["खुलकर संवाद करें", "साझी रुचियां खोजें", "एक-दूसरे के स्थान का सम्मान करें"],
//       परिवारिकविवाद: ["खुली बातचीत को बढ़ावा दें", "स्वस्थ सीमाएँ निर्धारित करें", "परिवार चिकित्सा का सहारा लें"],
//     },
//   }), []);

//   return (
//     <>
//       <div className="w-full">
//         <h3 className="font-bold text-2xl text-white text-center">{translations[language].mainProblem}</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//           {Object.keys(options[language]).map((key) => (
//             <button
//               key={key}
//               onClick={() => setProblem(key)}
//               className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${problem === key ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//             >
//               {key}
//             </button>
//           ))}
//         </div>
//       </div>

//       {problem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].subProblem}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {options[language][problem].map((sub) => (
//               <button
//                 key={sub}
//                 onClick={() => setSubProblem(sub)}
//                 className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${subProblem === sub ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {subProblem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].details}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {details[language][subProblem].map((detailItem) => (
//               <button
//                 key={detailItem}
//                 onClick={() => setDetail(detailItem)}
//                 className={`px-6 py-3 min-w-[200px] min-h-[50px] rounded-lg font-semibold ${detail === detailItem ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"}`}
//               >
//                 {detailItem}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }







// import React, { useMemo } from "react";

// export default function ProblemDetails({
//   language,
//   problem,
//   setProblem,
//   subProblem,
//   setSubProblem,
//   detail,
//   setDetail,
// }) {
//   const translations = useMemo(() => ({
//     en: { mainProblem: "Main Problem", subProblem: "Sub Problem", details: "Details" },
//     hi: { mainProblem: "मुख्यसमस्या", subProblem: "उपसमस्या", details: "विवरण" },
//   }), []);

//   const options = useMemo(() => ({
//     en: {
//       Relationships: ["Miscommunication", "TrustIssues", "Breakup", "Conflict"],
//       Suicidal: ["SelfHarm", "EndOfTheRoad", "EmotionalPain"],
//       Dream: ["Ambition", "Nightmare", "LucidDream", "DreamOfSuccess"],
//       Distraction: ["LoveBreakup", "SocialMedia", "TimeManagement", "Overthinking"],
//       Family: ["StudyPressure", "ParentExpectations", "SiblingRivalry", "FamilyConflicts"],
//     },
//     hi: {
//       रिश्ते: ["गलतफहमी", "विश्वासकीकम", "टूटेरिश्ते", "विवाद"],
//       आत्महत्या: ["निराशाजनकअनुभूति", "स्वयंकोहानि", "रास्ताकअंत", "भावनात्मकदर्द"],
//       सपना: ["महत्वाकांक्षा", "दुस्वप्न", "स्वप्ननिर्देश", "सफलतास्वप्न"],
//       विघटन: ["प्रेमब्रेकअप", "सोशलमीडिया", "समयप्रबंधन", "अत्यधिकसोच"],
//       परिवार: ["अध्यानदबाव", "माता-पिताकीअपेक्षाएँ", "भाई-बहनकीप्रतिस्पर्धा", "परिवारिकविवाद"],
//     },
//   }), []);

//   const details = useMemo(() => ({
//     en: {
//       Miscommunication: ["Listen Actively", "Seek Clarification", "Avoid Assumptions"],
//       TrustIssues: ["Build Trust Gradually", "Seek Counseling", "Open Communication"],
//       Breakup: ["Let Go", "Focus On SelfCare", "Seek Support"],
//       Conflict: ["Find Common Ground", "Compromise", "Seek Mediation"],
//       SelfHarm: ["Reach Out for Support", "Replace Negative Behaviors", "Practice Self-Care"],
//       EndOfTheRoad: ["Talk to Loved Ones", "Seek Therapy", "Reevaluate Priorities"],
//       EmotionalPain: ["Acknowledge Feelings", "Practice Mindfulness", "Seek Counseling"],
//       Ambition: ["Set Goals", "Stay Motivated", "Overcome Obstacles"],
//       Nightmare: ["Face Your Fears", "Seek Rest", "Avoid Stressful Situations"],
//       LucidDream: ["Control Your Dreams", "StayAware", "Practice Meditation"],
//       DreamOfSuccess: ["Visualize Success", "Plan Your Path", "Stay Focused"],
//       LoveBreakup: ["Allow Time for Healing", "Talk to Someone You Trust", "Engage in Activities You Enjoy"],
//       SocialMedia: ["Take Breaks", "Limit Usage", "Focus on Real-Life Connections"],
//       TimeManagement: ["Set Priorities", "Use a Planner", "Avoid Procrastination"],
//       Overthinking: ["Practice Mindfulness", "Focus on the Present", "Seek Perspective"],
//       StudyPressure: ["Take Breaks", "Create a Schedule", "Talk to a Mentor"],
//       ParentExpectations: ["Have an Honest Conversation", "Set Boundaries", "Focus on Your Goals"],
//       SiblingRivalry: ["Communicate Openly", "Find Common Interests", "Respect Each Other's Space"],
//       FamilyConflicts: ["Encourage Open Dialogue", "Set Healthy Boundaries", "Seek Family Counseling"],
//     },
//     hi: {
//       गलतफहमी: ["सक्रियरोपसेसुनें", "स्पष्टीकरणमांगें", "अनुमानोंसेबचें"],
//       विश्वासकीकम: ["विश्वासकोधीरे-धीरेबढ़ाएं", "मददप्राप्तकरें", "खुलकरसंवादकरें"],
//       टूटेरिश्ते: ["छोड़दें", "स्वयंपरध्यानदें", "समर्थनप्राप्तकरें"],
//       विवाद: ["साझा विचारधाराप्राप्तकरें", "समझौता करें", "मध्यस्थतामांगें"],
//       निराशाजनकअनुभूति: ["किसीसेबातकरें", "पेशेवरमददप्राप्तकरें", "छोटेलक्ष्यपरफोकसकरें"],
//       स्वयंकोहानि: ["समर्थनकेलियेसंपर्ककरें", "नकरात्मकव्यवहारकोबदले", "स्वयंकीदेखभालकरें"],
//       रास्ताकअंत: ["प्रियजनोंसेबातकरें", "चिकित्सीयसहायतासुने", "प्राथमिकताआंकलें"],
//       भावनात्मकदर्द: ["भावनाओंकोस्वीकारकरें", "माइंडफुलनेसअभ्यासकरें", "मनोचिकित्सकसेमददले"],
//       महत्वाकांक्षा: ["लक्ष्यनिर्धारणकरें", "प्रेरितरहें", "अवरोधोंकोदूरकरें"],
//       दुस्वप्न: ["अपनेभयोंका सामना करें", "आराम करें", "तनावपूर्णपरिस्थितियोंसेबचें"],
//       स्वप्ननिर्देश: ["अपनेस्वप्नोंकोनियंत्रितकरें", "जागरूकरहें", "ध्यानअभ्यासकरें"],
//       सफलतास्वप्न: ["सफलता की कल्पना करें", "अपना रास्ता योजना बनाएं", "ध्यान केंद्रित रखें"],
//       प्रेमब्रेकअप: ["सभी समय को ठीक करने दें", "किसीसेबात करें", "वह गतिविधियाँ करें जो आपको पसंद हों"],
//       सोशलमीडिया: ["ब्रेकलें", "उपयोगसीमा करें", "वास्तविक-संपर्कोंपरफोकसकरें"],
//       समयप्रबंधन: ["प्राथमिकताएँनिर्धारणकरें", "योजनाकारकें", "काममेंअड़चनें न आने दें"],
//       अत्यधिकसोच: ["माइंडफुलनेसअभ्यास करें", "वर्तमानपरफोकस करें", "परिप्रेक्ष्य प्राप्त करें"],
//       अध्यानदबाव: ["ब्रेक लें", "एक कार्यक्रम बनाएं", "एक मेंटर से बात करें"],
//       मातापिताकीअपेक्षाएँ: ["ईमानदारी से बातचीत करें", "सीमाएँ निर्धारित करें", "अपने लक्ष्य पर ध्यान केंद्रित रखें"],
//       भाईबहनकीप्रतिस्पर्धा: ["खुलकर संवाद करें", "साझी रुचियां खोजें", "एक-दूसरे के स्थान का सम्मान करें"],
//       परिवारिकविवाद: ["खुली बातचीत को बढ़ावा दें", "स्वस्थ सीमाएँ निर्धारित करें", "परिवार चिकित्सा का सहारा लें"],
//     },
//   }), []);

//   return (
//     <div className="space-y-6">
//       {/* Main Problem */}
//       <div className="w-full">
//         <h3 className="font-bold text-2xl text-white text-center">{translations[language].mainProblem}</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//           {Object.keys(options[language]).map((key) => (
//             <button
//               key={key}
//               onClick={() => setProblem(key)}
//               className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
//                 problem === key
//                   ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
//                   : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
//               } whitespace-nowrap overflow-hidden text-ellipsis`}
//             >
//               {key}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Sub Problem */}
//       {problem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].subProblem}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {options[language][problem].map((sub) => (
//               <button
//                 key={sub}
//                 onClick={() => setSubProblem(sub)}
//                 className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
//                   subProblem === sub
//                     ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
//                     : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
//                 } whitespace-nowrap overflow-hidden text-ellipsis`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Details */}
//       {subProblem && (
//         <div className="w-full">
//           <h3 className="font-bold text-2xl text-white text-center">{translations[language].details}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {details[language][subProblem].map((detailItem) => (
//               <button
//                 key={detailItem}
//                 onClick={() => setDetail(detailItem)}
//                 className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
//                   detail === detailItem
//                     ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
//                     : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
//                 } whitespace-nowrap overflow-hidden text-ellipsis`}
//               >
//                 {detailItem}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
















import React, { useMemo } from "react";

const ProblemDetails = React.memo(({
  language,
  problem,
  setProblem,
  subProblem,
  setSubProblem,
  detail,
  setDetail,
}) => {
  const translations = useMemo(() => ({
    en: { mainProblem: "Main Problem", subProblem: "Sub Problem", details: "Details" },
    hi: { mainProblem: "मुख्यसमस्या", subProblem: "उपसमस्या", details: "विवरण" },
  }), []);

  const options = useMemo(() => ({
    en: {
      Relationships: ["Miscommunication", "TrustIssues", "Breakup", "Conflict"],
      Suicidal: ["SelfHarm", "EndOfTheRoad", "EmotionalPain"],
      Dream: ["Ambition", "Nightmare", "LucidDream", "DreamOfSuccess"],
      Distraction: ["LoveBreakup", "SocialMedia", "TimeManagement", "Overthinking"],
      Family: ["StudyPressure", "ParentExpectations", "SiblingRivalry", "FamilyConflicts"],
    },
    hi: {
      रिश्ते: ["गलतफहमी", "विश्वासकीकम", "टूटेरिश्ते", "विवाद"],
      आत्महत्या: ["निराशाजनकअनुभूति", "स्वयंकोहानि", "रास्ताकअंत", "भावनात्मकदर्द"],
      सपना: ["महत्वाकांक्षा", "दुस्वप्न", "स्वप्ननिर्देश", "सफलतास्वप्न"],
      विघटन: ["प्रेमब्रेकअप", "सोशलमीडिया", "समयप्रबंधन", "अत्यधिकसोच"],
      परिवार: ["अध्यानदबाव", "माता-पिताकीअपेक्षाएँ", "भाई-बहनकीप्रतिस्पर्धा", "परिवारिकविवाद"],
    },
  }), []);

  const details = useMemo(() => ({
    en: {
      Miscommunication: ["Listen Actively", "Seek Clarification", "Avoid Assumptions"],
      TrustIssues: ["Build Trust Gradually", "Seek Counseling", "Open Communication"],
      Breakup: ["Let Go", "Focus On SelfCare", "Seek Support"],
      Conflict: ["Find Common Ground", "Compromise", "Seek Mediation"],
      SelfHarm: ["Reach Out for Support", "Replace Negative Behaviors", "Practice Self-Care"],
      EndOfTheRoad: ["Talk to Loved Ones", "Seek Therapy", "Reevaluate Priorities"],
      EmotionalPain: ["Acknowledge Feelings", "Practice Mindfulness", "Seek Counseling"],
      Ambition: ["Set Goals", "Stay Motivated", "Overcome Obstacles"],
      Nightmare: ["Face Your Fears", "Seek Rest", "Avoid Stressful Situations"],
      LucidDream: ["Control Your Dreams", "StayAware", "Practice Meditation"],
      DreamOfSuccess: ["Visualize Success", "Plan Your Path", "Stay Focused"],
      LoveBreakup: ["Allow Time for Healing", "Talk to Someone You Trust", "Engage in Activities You Enjoy"],
      SocialMedia: ["Take Breaks", "Limit Usage", "Focus on Real-Life Connections"],
      TimeManagement: ["Set Priorities", "Use a Planner", "Avoid Procrastination"],
      Overthinking: ["Practice Mindfulness", "Focus on the Present", "Seek Perspective"],
      StudyPressure: ["Take Breaks", "Create a Schedule", "Talk to a Mentor"],
      ParentExpectations: ["Have an Honest Conversation", "Set Boundaries", "Focus on Your Goals"],
      SiblingRivalry: ["Communicate Openly", "Find Common Interests", "Respect Each Other's Space"],
      FamilyConflicts: ["Encourage Open Dialogue", "Set Healthy Boundaries", "Seek Family Counseling"],
    },
    hi: {
      गलतफहमी: ["सक्रियरोपसेसुनें", "स्पष्टीकरणमांगें", "अनुमानोंसेबचें"],
      विश्वासकीकम: ["विश्वासकोधीरे-धीरेबढ़ाएं", "मददप्राप्तकरें", "खुलकरसंवादकरें"],
      टूटेरिश्ते: ["छोड़दें", "स्वयंपरध्यानदें", "समर्थनप्राप्तकरें"],
      विवाद: ["साझा विचारधाराप्राप्तकरें", "समझौता करें", "मध्यस्थतामांगें"],
      निराशाजनकअनुभूति: ["किसीसेबातकरें", "पेशेवरमददप्राप्तकरें", "छोटेलक्ष्यपरफोकसकरें"],
      स्वयंकोहानि: ["समर्थनकेलियेसंपर्ककरें", "नकरात्मकव्यवहारकोबदले", "स्वयंकीदेखभालकरें"],
      रास्ताकअंत: ["प्रियजनोंसेबातकरें", "चिकित्सीयसहायतासुने", "प्राथमिकताआंकलें"],
      भावनात्मकदर्द: ["भावनाओंकोस्वीकारकरें", "माइंडफुलनेसअभ्यासकरें", "मनोचिकित्सकसेमददले"],
      महत्वाकांक्षा: ["लक्ष्यनिर्धारणकरें", "प्रेरितरहें", "अवरोधोंकोदूरकरें"],
      दुस्वप्न: ["अपनेभयोंका सामना करें", "आराम करें", "तनावपूर्णपरिस्थितियोंसेबचें"],
      स्वप्ननिर्देश: ["अपनेस्वप्नोंकोनियंत्रितकरें", "जागरूकरहें", "ध्यानअभ्यासकरें"],
      सफलतास्वप्न: ["सफलता की कल्पना करें", "अपना रास्ता योजना बनाएं", "ध्यान केंद्रित रखें"],
      प्रेमब्रेकअप: ["सभी समय को ठीक करने दें", "किसीसेबात करें", "वह गतिविधियाँ करें जो आपको पसंद हों"],
      सोशलमीडिया: ["ब्रेकलें", "उपयोगसीमा करें", "वास्तविक-संपर्कोंपरफोकसकरें"],
      समयप्रबंधन: ["प्राथमिकताएँनिर्धारणकरें", "योजनाकारकें", "काममेंअड़चनें न आने दें"],
      अत्यधिकसोच: ["माइंडफुलनेसअभ्यास करें", "वर्तमानपरफोकस करें", "परिप्रेक्ष्य प्राप्त करें"],
      अध्यानदबाव: ["ब्रेक लें", "एक कार्यक्रम बनाएं", "एक मेंटर से बात करें"],
      मातापिताकीअपेक्षाएँ: ["ईमानदारी से बातचीत करें", "सीमाएँ निर्धारित करें", "अपने लक्ष्य पर ध्यान केंद्रित रखें"],
      भाईबहनकीप्रतिस्पर्धा: ["खुलकर संवाद करें", "साझी रुचियां खोजें", "एक-दूसरे के स्थान का सम्मान करें"],
      परिवारिकविवाद: ["खुली बातचीत को बढ़ावा दें", "स्वस्थ सीमाएँ निर्धारित करें", "परिवार चिकित्सा का सहारा लें"],
    },
  }), []);

  return (
    <div className="space-y-6">
      {/* Main Problem */}
      <div className="w-full">
        <h3 className="font-bold text-2xl text-white text-center">{translations[language].mainProblem}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Object.keys(options[language]).map((key) => (
            <button
              key={key}
              onClick={() => setProblem(key)}
              className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
                problem === key
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
                  : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
              } whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Sub Problem */}
      {problem && (
        <div className="w-full">
          <h3 className="font-bold text-2xl text-white text-center">{translations[language].subProblem}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {options[language][problem].map((sub) => (
              <button
                key={sub}
                onClick={() => setSubProblem(sub)}
                className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
                  subProblem === sub
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
                    : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                } whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Details */}
      {subProblem && (
        <div className="w-full">
          <h3 className="font-bold text-2xl text-white text-center">{translations[language].details}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {details[language][subProblem].map((detailItem) => (
              <button
                key={detailItem}
                onClick={() => setDetail(detailItem)}
                className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out ${
                  detail === detailItem
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-md"
                    : "bg-gradient-to-r from-purple-400 to-blue-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                } whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                {detailItem}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default ProblemDetails;
