import Image from "next/image"

const imgWhatsAppImage =
  "https://www.figma.com/api/mcp/asset/f42da86d-04b6-401d-8a2e-5d2d28031add"
const imgIcon =
  "https://www.figma.com/api/mcp/asset/c6b4ac8b-e7f2-4702-8541-73d5343a38cc"

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <div className="bg-[#1a1a1a] w-full">
        {/* Hero Section */}
        <div className="bg-[#1a1a1a] h-[430px] relative w-full">
          {/* Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-12 bg-[#1a1a1a] border-[3.333px] border-solid border-white rounded-[5px] w-[1280px] h-[64.844px]">
            <div className="absolute left-[11.32px] top-[12.43px] bg-white rounded-[5px] w-[117.135px] h-[39.983px]">
              <p className="absolute left-[23.99px] top-[4.99px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-black">
                Language
              </p>
            </div>
            <div className="absolute left-[140.45px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[93.108px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                Home
              </p>
            </div>
            <div className="absolute left-[245.56px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[115.955px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                About Us
              </p>
            </div>
            <div className="absolute left-[373.51px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[106.736px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                Services
              </p>
            </div>
            <div className="absolute left-[492.24px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[161.302px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                Our Adventures
              </p>
            </div>
            <div className="absolute left-[665.54px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[125.156px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                Contact us
              </p>
            </div>
            <div className="absolute left-[802.69px] top-[11.32px] border-[1.111px] border-solid border-white rounded-[5px] w-[129.34px] h-[42.205px]">
              <p className="absolute left-[25.1px] top-[6.1px] font-['Arimo',sans-serif] font-normal text-[16px] leading-[24px] text-white">
                Try for Free
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute left-[538px] top-[113px] w-[735px] h-[413px]">
            <img
              alt="Hero background"
              className="w-full h-full object-cover"
              src={imgWhatsAppImage}
              width={735}
              height={413}
            />
          </div>
        </div>

        {/* Features Container */}
        <div className="relative w-full pb-12">
          {/* Feature 1: Active Pauses */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[112px] w-[1216px] h-[256px] flex items-start gap-8">
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Active Pauses Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[177px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4">
                Active Pauses
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)]">
                We know it&apos;s important to move our body and drink water.
                Kids will be encouraged to do so during gameplay sessions.
              </p>
            </div>
          </div>

          {/* Feature 2: Safe Conversations */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[464px] w-[1216px] h-[256px] flex items-start gap-8 justify-end">
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[185px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4 text-right">
                Safe Conversations
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)] text-right">
                Only appropriate and polite conversations take place in our
                servers. We monitor all communications to ensure a positive
                environment.
              </p>
            </div>
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Safe Conversations Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
          </div>

          {/* Feature 3: Zero Bullying Policy */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[816px] w-[1216px] h-[256px] flex items-start gap-8">
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Zero Bullying Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[185px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4">
                Zero Bullying Policy
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)]">
                We know how online bullying works and we always promote positive
                behaviors from our students. Anything other than that will be
                handled to ensure the emotional safety of all players.
              </p>
            </div>
          </div>

          {/* Feature 4: Multicultural Friends */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[1168px] w-[1216px] h-[256px] flex items-start gap-8 justify-end">
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[185px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4 text-right">
                Multicultural Friends
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)] text-right">
                In the journey of learning a new language with videogames, your
                child will be able to meet people from all around the globe in a
                safe environment.
              </p>
            </div>
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Multicultural Friends Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
          </div>

          {/* Feature 5: Communication with Families */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[1520px] w-[1216px] h-[256px] flex items-start gap-8">
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Communication Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[185px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4">
                Communication with Families
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)]">
                The teachers of each session will share pictures and remarkable
                moments from the gameplay. You can always stay updated in your
                kids&apos; adventures.
              </p>
            </div>
          </div>

          {/* Feature 6: Open Communication */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[1872px] w-[1216px] h-[256px] flex items-start gap-8 justify-end">
            <div className="bg-white border-[3.333px] border-solid border-white flex-1 h-[185px] mt-[43px] px-[43px] py-[43px]">
              <h2 className="font-['Arimo',sans-serif] font-normal text-[20px] leading-[30px] text-black tracking-[1px] uppercase mb-4 text-right">
                Open Communication
              </h2>
              <p className="font-['Arimo',sans-serif] font-normal text-[16px] leading-[26px] text-[rgba(0,0,0,0.8)] text-right">
                You can always text us for any question or concern you might
                have. We&apos;re here to support you and your child&apos;s
                learning journey.
              </p>
            </div>
            <div className="border-[3.333px] border-solid border-white w-[256px] h-[256px] flex items-center justify-center">
              <img
                alt="Open Communication Icon"
                className="w-24 h-24"
                src={imgIcon}
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
