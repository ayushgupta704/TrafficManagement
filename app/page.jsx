// import { Button } from "@/components/ui/button";
// export default function Home() {

//   return (
//   <div className="mt-40">
//     {/* <Button variant="destructive">Ayush</Button> */}
//     return <div className="mt-40"></div>
//   </div>
//   );
// }

// import HeroSection from "@/components/hero";
// import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
// import { Card } from "@/components/ui/card";
// import { CardContent } from "@/components/ui/card";
// import Image from "next/image";
// // import { Button } from "react-day-picker";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Home(){
//   return (
//     <div className="mt-40">
//       <HeroSection/>

//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {statsData.map((statsData,index)=>(
//             <div key={index} className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">
//                 {statsData.value}
//                 </div>
//               <div className="text-gray-600">{statsData.label}</div>
//             </div>
//   ))}
//           </div>
//         </div>
//       </section>


// {/* feature section */}

//       <section className="py-20">
//         <div className="container mx-auto px-4">
// {/* mb:margin bottom */}
//           <h2 className="text-3xl font-bold text-center mb-12">Track real-time tracking to get actionable insight</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuresData.map((feature,index)=>(

// // card component from shadcin UI
              
//               <Card key={index} className="p-6">

//               <CardContent className="space-x-4 pt-4 text-center">
//                 {feature.icon}
//                 <h3 className="text-xl fint-semiold">{feature.title}</h3>

// {/* card inside text should be gray*/}
//                 <p className="text-gray-600">{feature.description}</p>
//               </CardContent>
              
//               </Card>

//             ))}
//           </div>

//         </div>
//       </section>


//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">

//           <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {howItWorksData.map((step,index)=>(
//                 <div className="text-center" key={index}>
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
//                 <p className="text-gray-600"> {step.description}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4">

//           <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonialsData.map((testimonial,index)=>(

              
//               <Card key={index} className="p-6">

//               <CardContent className="pt-4">
//                 <div className="flex items-center mb-4">

//                   <Image 
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                   />
//                 <div className="ml-4">

//                 <div className="font-semibold">{testimonial.name}</div>
//                 <div className="text-sm text-gray-600">{testimonial.role}</div>

//                 </div>
//                 </div>
//               </CardContent>
//               <p className="text-gray-600">{testimonial.quote}</p>
//               </Card>

//             ))}
//           </div>

//         </div>
//       </section>

//       <section className="py-20 bg-yellow-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to save your time !
//           </h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//             Be on time at your location.
//           </p>
//           <Link href="/dashboard">
//           <Button 
//           size="lg"
//           className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
//           >
//             Track Now
//           </Button>
          
//           </Link>
          
//         </div>
//       </section>

//     </div>
//   );
// }


import HeroSection from "@/components/hero";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {statsData.value}
                </div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* feature section */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* mb:margin bottom */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Track real-time tracking to get actionable insight
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              // card component from shadcin UI

              <Card key={index} className="p-6">
                <CardContent className="space-x-4 pt-4 text-center">
                  {feature.icon}
                  <h3 className="text-xl fint-semiold">{feature.title}</h3>

                  {/* card inside text should be gray */}
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div className="text-center" key={index}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600"> {step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <p className="text-gray-600">{testimonial.quote}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to save time section with iframe */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to save your time !
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl">
                Be on time at your location.
              </p>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
                >
                  Track Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510303648!2d76.76356891374637!3d28.64428735347703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1740577969091!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg w-full" // Added styling
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
