import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, Scissors, Sliders, BarChart3 } from "lucide-react"

export default function HyehwaStudio() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            혜화 녹음실
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#gear" className="text-sm font-medium hover:text-primary transition-colors">
              Gear
            </Link>
            <Link href="#rates" className="text-sm font-medium hover:text-primary transition-colors">
              Rates
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            예약하기
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  혜화 녹음실
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  전문적인 음향 서비스를 제공하는 스튜디오
                </p>
              </div>
              <div className="space-x-4">
                <Button>예약 문의하기</Button>
                <Button variant="outline">스튜디오 둘러보기</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">혜화 녹음실</h2>
                <p className="text-muted-foreground">
                  혜화 녹음실은 4조선 해방촌 도보 10분 거리에 위치한 조용하고 자문한 분위기의 스튜디오입니다.
                </p>
                <p className="text-muted-foreground">
                  프로 뮤지션, 기업, 인디 아티스트, 아마추어 등 다양한 음악 작업자들이 편안하게 소통하며 창작할 수 있는
                  공간을 제공합니다.
                </p>
                <p className="text-muted-foreground">
                  음악 녹음, 편집, 믹싱, 마스터링 등 음원 제작의 전 과정을 최신 장비와 최적의 환경에서 진행합니다.
                </p>
                <p className="text-muted-foreground">
                  15년 이상의 산업 음악 프로젝트 경험을 바탕으로, 합리적인 가격에 높은 퀄리티를 보장합니다.
                </p>
                <p className="text-muted-foreground">
                  또한, 고객 맞춤형 서비스를 제공하여 창작의 영감을 불러일으킬 수 있는 최적의 작업 환경을 조성합니다.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="혜화 녹음실 스튜디오"
                    width={600}
                    height={400}
                    className="aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">서비스</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  혜화 녹음실은 다음과 같은 서비스를 제공하고 있습니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Recording</h3>
                <p className="text-center text-sm text-muted-foreground">전문 장비와 최적화된 공간에서 고품질 녹음</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Editing</h3>
                <p className="text-center text-sm text-muted-foreground">정확한 편집으로 완성도 높은 결과물 제작</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Sliders className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mixing</h3>
                <p className="text-center text-sm text-muted-foreground">전문적인 믹싱으로 균형 잡힌 사운드 구현</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mastering</h3>
                <p className="text-center text-sm text-muted-foreground">최종 마스터링으로 상업적 품질의 음원 완성</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">프로젝트</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  혜화 녹음실에서 진행된 다양한 프로젝트를 소개합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                    alt={`프로젝트 ${item}`}
                    width={400}
                    height={300}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold">프로젝트 {item}</h3>
                    <p className="text-sm">아티스트 / 앨범명</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gear Section */}
        <section id="gear" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">장비</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  혜화 녹음실은 최고 품질의 장비를 갖추고 있습니다.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">녹음 장비</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pro Tools HD</li>
                  <li>• Universal Audio Apollo 8p</li>
                  <li>• Neumann U87 Microphone</li>
                  <li>• AKG C414 Microphone</li>
                  <li>• Shure SM7B Microphone</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">모니터링 시스템</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Genelec 8040 Monitors</li>
                  <li>• Yamaha NS10 Monitors</li>
                  <li>• Sennheiser HD650 Headphones</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">아웃보드 기어</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Neve 1073 Preamp</li>
                  <li>• SSL G-Series Compressor</li>
                  <li>• Avalon VT-737sp Channel Strip</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section id="rates" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">요금 안내</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  합리적인 가격으로 전문적인 서비스를 제공합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">녹음</h3>
                <div className="mb-4 text-3xl font-bold">
                  ₩50,000<span className="text-sm font-normal text-muted-foreground">/시간</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    전문 엔지니어 지원
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    고품질 마이크 및 장비
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    음료 제공
                  </li>
                </ul>
                <Button className="w-full">예약하기</Button>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">믹싱</h3>
                <div className="mb-4 text-3xl font-bold">
                  ₩150,000<span className="text-sm font-normal text-muted-foreground">/곡</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    전문 믹싱 엔지니어
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    2회 수정 포함
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    스테레오 및 스템 파일 제공
                  </li>
                </ul>
                <Button className="w-full">예약하기</Button>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">마스터링</h3>
                <div className="mb-4 text-3xl font-bold">
                  ₩80,000<span className="text-sm font-normal text-muted-foreground">/곡</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    전문 마스터링 엔지니어
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    1회 수정 포함
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    디지털 및 CD 마스터 제공
                  </li>
                </ul>
                <Button className="w-full">예약하기</Button>
              </div>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-center">패키지 할인</h3>
              <p className="mb-4 text-center text-muted-foreground">
                녹음, 믹싱, 마스터링 패키지 예약 시 20% 할인 혜택을 드립니다.
              </p>
              <div className="flex justify-center">
                <Button>패키지 문의하기</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">문의하기</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  궁금한 점이 있으시면 언제든지 연락주세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">연락처</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      02-123-4567
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      info@hyehwastudio.com
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      서울특별시 종로구 혜화동
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">운영 시간</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>월요일 - 금요일: 10:00 - 22:00</p>
                    <p>토요일: 12:00 - 20:00</p>
                    <p>일요일: 예약제</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">메시지 보내기</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        이름
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="홍길동"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        이메일
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      제목
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="문의 제목"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      메시지
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="문의 내용을 입력해주세요"
                    />
                  </div>
                  <Button className="w-full">보내기</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">혜화 녹음실</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} 혜화 녹음실. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

