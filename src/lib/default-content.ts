import { TAQContent } from './content-types'

export const defaultContent: TAQContent = {
  hero: {
    title: 'System Jakości Wieprzowiny TAQ',
    subtitle: 'Od pola do stołu'
  },
  introduction: {
    title: 'Tradycja i Jakość',
    content: 'System Jakości Wieprzowiny „TAQ" (Tradition and Quality) został stworzony w odpowiedzi na rosnące oczekiwania konsumentów poszukujących mięsa wieprzowego o wyjątkowych walorach smakowych, odżywczych i sensorycznych. System ten gwarantuje produkcję wieprzowiny wysokiej jakości, opartą na tradycji hodowlanej i rygorystycznych zasadach obejmujących cały łańcuch produkcyjny – „od pola do stołu". Jego celem jest dostarczenie konsumentom i przetwórcom surowca o stałych, pożądanych parametrach, produkowanego w sposób zrównoważony i etyczny.'
  },
  pillars: {
    pillar1: {
      number: 'I',
      title: 'Tradycja i genetyka',
      description: 'Fundamentem Systemu TAQ jest wykorzystanie potencjału genetycznego polskich ras świń, które posiadają wieloletnią tradycję hodowli.',
      points: [
        'Wyselekcjonowane rasy: produkcja bazuje wyłącznie na tucznikach czystorasowych oraz mieszańcach dwóch ras: wielkiej białej polskiej (wbp) i polskiej białej zwisłouchej (pbz).',
        'Gwarancja jakości mięsa: świnie tych ras charakteryzują się doskonałą jakością wieprzowiny i są bardziej odporne na czynniki stresogenne. Warunkiem koniecznym jest, aby wszystkie zwierzęta w systemie były wolne od zmutowanego genu RYR1 (genu wrażliwości na stres), co eliminuje ryzyko wystąpienia wad jakościowych mięsa (np. PSE).'
      ]
    },
    pillar2: {
      number: 'II',
      title: 'Żywienie',
      description: 'Sposób żywienia ma kluczowy wpływ na ostateczny smak i jakość mięsa. System TAQ narzuca w tym zakresie ścisłe zasady.',
      points: [
        'Bez GMO: w okresie tuczu obowiązuje całkowity zakaz stosowania pasz modyfikowanych genetycznie (GMO). Rolnicy muszą dokumentować pochodzenie pasz, przedstawiając odpowiednie oświadczenia lub wyniki badań laboratoryjnych.',
        'Baza zbożowa: podstawą diety tuczników są zboża takie jak jęczmień, żyto, pszenżyto, pszenica, a także rośliny strączkowe.',
        'Ograniczenia w końcowej fazie tuczu: na 4 tygodnie przed ubojem z diety eliminuje się pasze mogące negatywnie wpłynąć na jakość wieprzowiny, takie jak produkty rybne czy wywary gorzelniane, a udział makuchów rzepakowych czy śruty kukurydzianej ogranicza się do 15%.'
      ]
    },
    pillar3: {
      number: 'III',
      title: 'Dobrostan i etyka',
      description: 'System TAQ kładzie ogromny nacisk na jakość etyczną, zapewniając zwierzętom warunki przewyższające obowiązujące normy prawne.',
      points: [
        'Zwiększona powierzchnia: lochy i tuczniki mają zapewnioną powierzchnię bytową większą o co najmniej 20% w stosunku do minimalnych wymogów prawnych.',
        'Zakaz obcinania ogonów: w systemie obowiązuje całkowity zakaz zabiegu obcinania ogonów. W celu zapobiegania agresji stosuje się inne metody, jak wzbogacanie środowiska.',
        'Stały dostęp do słomy: zwierzęta muszą mieć zapewniony stały dostęp do słomy lub innych materiałów manipulacyjnych, co pozwala im na realizację naturalnych zachowań.',
        'Małe grupy: prosięta, warchlaki i tuczniki utrzymywane są w grupach nieprzekraczających 40 sztuk, co ogranicza stres i agresję.',
        'Wsparcie dla gospodarstw rodzinnych: system promuje zrównoważony chów w gospodarstwach rodzinnych, z roczną produkcją do 2000 tuczników, co minimalizuje negatywny wpływ na środowisko.'
      ]
    },
    pillar4: {
      number: 'IV',
      title: 'Zdrowie i bezpieczeństwo',
      description: 'Zdrowie zwierząt i bezpieczeństwo żywności są priorytetem w Systemie TAQ.',
      points: [
        'Tucz bez antybiotyków: tucz odbywa się bez użycia profilaktycznych przeciwdrobnoustrojowych produktów leczniczych, w tym antybiotyków.',
        'Leczenie z wykluczeniem: antybiotyki mogą być stosowane wyłącznie w uzasadnionych medycznie przypadkach, na zlecenie i pod nadzorem lekarza weterynarii. Zwierzęta poddane takiemu leczeniu są trwale wykluczane z Systemu TAQ.',
        'Bioasekuracja: wszystkie gospodarstwa uczestniczące w systemie muszą spełniać rygorystyczne zasady bioasekuracji, aby zapobiegać chorobom i zapewnić zdrowie stad.'
      ]
    }
  },
  finalProduct: {
    title: 'Produkt finalny',
    intro: 'Aby finalny produkt spełniał najwyższe standardy, System TAQ precyzyjnie reguluje kluczowe etapy po opuszczeniu przez zwierzęta gospodarstwa. Wieprzowina produkowana w Systemie TAQ wyróżnia się unikalnymi, ściśle zdefiniowanymi cechami, które gwarantują jej wyjątkowe walory kulinarne i technologiczne.',
    parameters: {
      title: 'Główne Parametry Jakości Mięsa (polędwica i szynka)',
      items: [
        'Prawidłowe pH₂: 5,5–5,8 (gwarancja braku wad jakościowych)',
        'Barwa: różowo-czerwona (jasność L∗ na poziomie 44–54)',
        'Wodochłonność: niska, na poziomie 2–5% (mięso jest soczyste po obróbce)',
        'Wysoka wartość odżywcza: zawartość białka ok. 20–22%',
        'Optymalna Marmurkowatość: zawartość tłuszczu śródmięśniowego ok. 2,0–3,5%, co zapewnia kruchość i smakowitość'
      ]
    },
    assortment: {
      title: 'Asortyment',
      items: [
        'Wieprzowina kulinarna: elementy anatomiczne, porcjowane oraz mięso mielone',
        'Surowiec do produkcji wędlin: wieprzowina, podroby i tłuszcze przeznaczone do wyrobu wysokogatunkowych wędlin'
      ]
    }
  },
  certification: {
    title: 'Identyfikowalność, certyfikacja i kontrola',
    sections: {
      traceability: {
        title: 'Pełna identyfikowalność',
        content: 'System zapewnia możliwość precyzyjnego prześledzenia każdego etapu produkcji – od pochodzenia prosiąt (udokumentowane pochodzenie rodziców), przez całą fazę chowu, aż po gotowy produkt na półce sklepowej. Służy temu m.in. obowiązkowa dokumentacja i odpowiednie znakowanie zwierząt.'
      },
      certification: {
        title: 'Niezależna certyfikacja',
        content: 'Zgodność z wymaganiami Systemu TAQ jest weryfikowana przez niezależne, upoważnione jednostki certyfikujące, które muszą posiadać akredytację zgodnie z normą PN-EN ISO/IEC 17065. Daje to konsumentowi gwarancję, że produkt ze znakiem TAQ faktycznie spełnia wszystkie rygorystyczne wymogi.'
      },
      supervision: {
        title: 'Ciągły nadzór',
        content: 'Każdy uczestnik systemu (rolnik, rzeźnia, zakład przetwórczy) podlega corocznej kontroli zewnętrznej (audytowi). Dodatkowo zobowiązany jest do prowadzenia stałej samokontroli i dokumentacji, która jest weryfikowana podczas audytu.'
      }
    }
  },
  contact: {
    title: 'Kontakt',
    organization: {
      name: 'Stowarzyszenie Polska Tradycja Smaku',
      address: 'Mościbrody 52, 08-112 Wiśniew',
      email: 'polskatradycjasmaku@gmail.com'
    },
    certificationBodies: {
      title: 'Jednostki certyfikujące działające w ramach System Jakości Wieprzowiny „TAQ" (Tradycja i Jakość)',
      bodies: [
        {
          name: 'Jednostka Certyfikująca Centrum Jakości AgroEko Sp. z o.o.',
          address: 'ul. Młynarska 42, 01-171 Warszawa'
        },
        {
          name: 'Jednostka Certyfikująca Kiwa COBICO Sp. z o.o.',
          address: 'Przebieczany 529, 32-020 Wieliczka'
        }
      ]
    }
  }
}
