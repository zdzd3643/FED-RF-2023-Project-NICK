import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguaeDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation : {
      escapeValue: false,
    },
    resources: {
      ko: {
        translation: {
            tit1:"THE",
            tit2:"ORGANIZATION",
            "모든 것은 어둠에서 시작됩니다.":"모든 것은 어둠에서 시작됩니다.",
            "그 어떠한 색과 빛도 존재하지 않는 상태에서":"그 어떠한 색과 빛도 존재하지 않는 상태에서,",
            cont3: "우리의 크리에이티브에 대한 여정은 시작됩니다.",
            cont4: "이상과 상상에 생기를 불어넣는 작업,",
            cont5: "재능의 원석을 발견하여 영감을 불어넣는 과정,",
            cont6: "예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고",
            cont7: "혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.",
            cont8: "더블랙레이블에 오신 것을 환영합니다."
        }
      },
      en: {
        translation: {
            tit1:"THE",
            tit2:"ORGANIZATION",
            "모든 것은 어둠에서 시작됩니다.":"Everything begins in the dark.",
            "그 어떠한 색과 빛도 존재하지 않는 상태에서":"With no color or light present,",
            cont3: "our journey to creativity begins",
            cont4: "The work of bringing ideals and imagination to life,",
            cont5: "the process of discovering and inspiring the gemstones of talent,",
            cont6: "and the bold attempt to redefine and innovate popular art beyond the limits of artistic conventional",
            cont7: "wisdom are the core of the values we are seeking",
            cont8: "Thank you for coming to The Black Label."
        },
      },
      ja: {
        translation: {
            tit1:"組織",
            tit2:"",
            "모든 것은 어둠에서 시작됩니다.":"すべては暗闇の中で始まります.",
            "그 어떠한 색과 빛도 존재하지 않는 상태에서":"色も光も存在しない状態でt,",
            cont3: "私たちの創造性への旅が始まります",
            cont4: "理想と想像力に命を吹き込む仕事,",
            cont5: "才能の原石を発見しインスピレーションを与えるプロセス,",
            cont6: "そして人気のあるものを再定義し革新する大胆な試みです",
            cont7: "芸術の常識の限界を超えた芸術こそが私たちが求める価値の核心です",
            cont8: "The Black Labelにお越しいただきありがとうございます."
        },
      },
      ch: {
        translation: {
            tit1:"组织",
            tit2:"",
            "모든 것은 어둠에서 시작됩니다.":"一切都从黑暗中开始.",
            "그 어떠한 색과 빛도 존재하지 않는 상태에서":"在没有颜色或光存在的状态下,",
            cont3: "我们的创意之旅从这里开始",
            cont4: "理想と想像力に命を吹き込む仕事,",
            cont5: "为理想和想象力注入生命的工作,",
            cont6: "发现才华宝石并激发它的过程",
            cont7: "超越艺术惯例的限制，重新定义流行艺术, 大胆尝试带来创新是我们追求的价值观的核心",
            cont8: "欢迎来到黑标."
        },
      },
    },
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;