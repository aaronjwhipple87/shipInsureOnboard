import Image from 'next/image'
import { Star2 } from './icons/Star2'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between md:mt-10 mt-5 md:w-3/4 mx-2 md:mx-auto">
        <h4 className="font-header font-bold text-2xl text-slate">
          Welcome, {"{"}NAME{"}"}!
        </h4>
        <p className="text-base font-body">
          Let&#39;s make this easy--Please verify the information below is correct.
        </p>
        <form className="font-body flex flex-col my-5">
          <label>Store Name*</label>
          <input></input>

          <label>Full Name*</label>
          <input></input>

          <label>Email Address*</label>
          <input></input>

          <label>Store URL*</label>
          <input></input>

          <button>Confirm</button>
        </form>


        <div className="font-body flex flex-col gap-2 pt-10">
          <div className="flex flex-row gap-4 items-center w-full justify-center mb-3">
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
          </div>
          <p className="text-center">
            “In amet turpis eget donec bibendum sit congue cras. Fusce parturient pulvinar non a nulla dictum sit
            facilisi aliquet. Posuere tortor egestas orci vel. Ut nulla amet eget habitasse donec urna est iaculis
            tellus. Vitae morbi lorem suscipit fermentum et.”
          </p>
          <div className="font-bold">
            <p>Craig Craigford, Store Owner</p>
            <p>June 2023</p>
          </div>
      </div>
    </main>
  )
}

// import React from "react";
// import { StateInactive } from "./icons/StateInactive";
// import { Star2 } from "./icons/Star2";
// import { Button } from "./components/Button";

// export default function Desktop () {
//   return (
//     <div className="desktop">
//       <div className="div-2">
//         <div className="overlap">
//           <div className="onboarding-menu">
//             <div className="onboarding-items">
//               <div className="task">
//                 <div className="task-2">
//                   <StateInactive className="icon-radio" color="#06001E" opacity="0.5" />
//                   <div className="text-wrapper-2">Personal Info</div>
//                 </div>
//               </div>
//               <div className="task-3">
//                 <div className="task-2">
//                   <StateInactive className="icon-radio" color="#06001E" opacity="0.5" />
//                   <div className="text-wrapper-3">Monthly Orders</div>
//                 </div>
//                 <div className="text-wrapper-4">Required</div>
//               </div>
//               <div className="task-3">
//                 <div className="task-2">
//                   <StateInactive className="icon-radio" color="#06001E" opacity="0.5" />
//                   <div className="text-wrapper-3">Billing</div>
//                 </div>
//                 <div className="text-wrapper-4">Required</div>
//               </div>
//             </div>
//             <img className="gradient" alt="Gradient" src="https://c.animaapp.com/nnxc9q4X/img/gradient-2@2x.png" />
//             <div className="onboarding-header">
//               <div className="text-wrapper-5">Onboarding</div>
//               <div className="element-x-steps-complete">0/3 steps complete!</div>
//             </div>
//           </div>
//           <div className="text-wrapper-6">Need help?</div>
//         </div>
//         <div className="welcome-NAME">
//           Welcome, {"{"}NAME{"}"}!
//         </div>
//         <p className="let-s-make-this-easy">
//           Let&#39;s make this easy--Please verify the information below is correct.
//         </p>
//         <div className="group">
//           <p className="p">
//             “In amet turpis eget donec bibendum sit congue cras. Fusce parturient pulvinar non a nulla dictum sit
//             facilisi aliquet. Posuere tortor egestas orci vel. Ut nulla amet eget habitasse donec urna est iaculis
//             tellus. Vitae morbi lorem suscipit fermentum et.”
//           </p>
//           <Star2 className="star" color="#8591FF" />
//           <Star2 className="star-2" color="#8591FF" />
//           <Star2 className="weight-fill" color="#8591FF" />
//           <Star2 className="star-1" color="#8591FF" />
//           <Star2 className="star-2-instance" color="#8591FF" />
//           <div className="text-wrapper-7">Craig Craigford, Store Owner</div>
//           <div className="text-wrapper-8">June 2023</div>
//         </div>
//         <div className="group-2">
//           <div className="button-primary-large-wrapper">
//             <Button
//               className="button-primary-large"
//               icon={false}
//               size="large"
//               state="default"
//               text="Confirm"
//               type="primary"
//             />
//           </div>
//           <div className="input-field-sm">
//             <div className="frame">
//               <p className="email-address">
//                 <span className="span">Store Name</span>
//                 <span className="text-wrapper-9">*</span>
//               </p>
//             </div>
//             <div className="group-wrapper">
//               <div className="frame-wrapper">
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-10">Store 123</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="input-field-sm-2">
//             <div className="frame">
//               <p className="email-address">
//                 <span className="span">Full Name</span>
//                 <span className="text-wrapper-9">*</span>
//               </p>
//             </div>
//             <div className="group-wrapper">
//               <div className="frame-wrapper">
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-10">Brenda Brendensen</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="overlap-group">
//             <div className="input-field-sm">
//               <div className="frame">
//                 <p className="email-address">
//                   <span className="span">Email Address</span>
//                   <span className="text-wrapper-9">*</span>
//                 </p>
//               </div>
//               <div className="frame-2">
//                 <div className="frame-wrapper">
//                   <div className="frame-3">
//                     <div className="text-wrapper-10">-</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-wrapper-11">update</div>
//           </div>
//           <div className="overlap-2">
//             <div className="input-field-sm">
//               <div className="frame">
//                 <p className="email-address">
//                   <span className="span">Store URL</span>
//                   <span className="text-wrapper-9">*</span>
//                 </p>
//               </div>
//               <div className="frame-2">
//                 <div className="frame-wrapper">
//                   <div className="frame-3">
//                     <div className="text-wrapper-10">-</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-wrapper-11">update</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

