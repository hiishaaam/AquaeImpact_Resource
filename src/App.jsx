import Button from "@/components/ui/button";
import Card, { CardContent } from "@/components/ui/card";
import React from "react";

const navigationItems = [
  { name: "Home", active: true },
  { name: "Who we are", active: false },
  { name: "What we do", active: false },
  { name: "Resources", active: false },
];

const blogCards = [
  { id: 1, position: "top-[371px] left-[215px]" },
  { id: 2, position: "top-[257px] left-[561px]" },
  { id: 3, position: "top-[391px] left-[912px]" },
  { id: 4, position: "top-[849px] left-[215px]" },
  { id: 5, position: "top-[735px] left-[562px]" },
  { id: 6, position: "top-[874px] left-[914px]" },
];

const footerLinks = [
  "Home",
  "Who We Are",
  "What We Do",
  "Resources",
  "Green Credits",
];

const usefulLinks = ["Disclaimer", "Privacy Policy"];

const Resource = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-[1466px] h-[2828px]">
        <div className="relative h-[2828px]">
          <div className="absolute w-[1440px] h-[2728px] top-[100px] left-0">
            <div className="h-[1010px] top-0 bg-blend-hard-light bg-[url(/desktop-17.png)] bg-cover bg-[50%_50%] absolute w-[1440px] left-0">
              <div className="absolute w-[596px] top-[213px] left-[423px] [text-shadow:0px_4px_10px_#000000] [font-family:'Thasadith-Regular',Helvetica] font-normal text-[#97edd2] text-[110px] tracking-[-5.50px] leading-[125px] whitespace-nowrap">
                RESOURCES
              </div>
            </div>

            <div className="bg-white rounded-[180px] w-[1440px] mt-[609px]">
              <div className="[font-family:'Wittgenstein-Medium',Helvetica] font-medium text-[#00d2ac] text-[64px] tracking-[1.28px] leading-[38px] text-center mt-8 mb-24">
                Our Blogs
              </div>
              <div className="grid grid-cols-3 gap-8 justify-items-center mt-24">
                {blogCards.map((card, idx) => (
                  <Card
                    key={card.id}
                    className={`w-80 h-[423px] bg-[#147866] rounded-[30px] border-0
                      ${idx === 1 ? "-mt-12" : ""}  // Move the center card in the first row up
                    `}
                  >
                    <CardContent className="p-0 w-full h-full"></CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <footer className="h-[680px] top-[2048px] bg-[#0b453b] absolute w-[1440px] left-0">
              <div className="w-[324px] top-[133px] left-[100px] text-[85px] tracking-[-1.70px] absolute [font-family:'Work_Sans-Medium',Helvetica] font-medium text-white leading-[75px] whitespace-nowrap">
                <span className="tracking-[-1.45px]">
                  logo
                  <br />
                </span>

                <span className="text-[35px] tracking-[-0.24px]">EMAIL</span>
              </div>

              <div className="absolute w-[259px] top-32 left-[720px] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-transparent text-[35px] tracking-[-0.70px] leading-[75px]">
                <span className="text-[#48ffd4] tracking-[-0.24px]">
                  Links
                  <br />
                </span>

                {footerLinks.map((link, index) => (
                  <span
                    key={index}
                    className="text-white tracking-[-0.24px] block"
                  >
                    {link}
                    <br />
                  </span>
                ))}
              </div>

              <div className="absolute w-[252px] top-[125px] left-[1088px] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-transparent text-[35px] tracking-[-0.70px] leading-[75px]">
                <span className="text-[#48ffd4] tracking-[-0.24px]">
                  Useful Links
                  <br />
                </span>

                {usefulLinks.map((link, index) => (
                  <span
                    key={index}
                    className="text-white tracking-[-0.24px] block"
                  >
                    {link}
                    <br />
                  </span>
                ))}
              </div>
            </footer>
          </div>

          <header className="absolute w-[1466px] h-[100px] top-0 left-0 bg-blend-hard-light">
            <div className="w-[206px] top-[11px] left-[50px] text-[45px] tracking-[-0.90px] absolute [font-family:'Work_Sans-Medium',Helvetica] font-medium text-white leading-[75px] whitespace-nowrap">
              Logo
            </div>

            <nav className="absolute w-[837px] h-[55px] top-3 left-[271px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-0 [font-family:'Work_Sans-Medium',Helvetica] font-medium text-3xl tracking-[-1.50px] leading-[75px] whitespace-nowrap ${
                    index === 0
                      ? "w-[102px] left-0 text-[#147866]"
                      : index === 1
                        ? "w-[205px] left-[151px] text-white"
                        : index === 2
                          ? "w-[206px] left-[400px] text-white"
                          : "w-[180px] left-[649px] text-white"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </nav>

            <div className="absolute w-[225px] h-[87px] top-[3px] left-[1165px]">
              <div className="h-[87px] shadow-[0px_4px_4px_#00000040]">
                <div className="w-[227px] h-[87px]">
                  <div className="relative w-[225px] h-[87px]">
                    <Button className="absolute w-[225px] h-[72px] top-[15px] left-0 bg-[#00572b] rounded-[9px] border border-solid border-[#595858] hover:bg-[#00572b]/90 h-auto">
                      <div className="absolute w-[196px] top-0 left-[15px] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-white text-3xl tracking-[-0.60px] leading-[100px] whitespace-nowrap">
                        Green Credits
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Resource;
