/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import heroImg from "./assets/images/regenerated_image_1777410336650.jpg";
import menuImg1 from "./assets/images/public/pizza_3.jpg";
import menuImg2 from "./assets/images/public/pizza_5.jpg";
import menuImg3 from "./assets/images/public/pizza_6.jpg";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Globe,
  Menu,
  X,
  Instagram,
  Facebook,
  Flame,
  ArrowLeft,
  MapPin,
  Phone,
  MessageSquare,
  Beer,
  Martini,
  Mic,
} from "lucide-react";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import type { ReactNode } from "react";

export type Language = "pt" | "en";
export const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "pt", setLang: () => {} });

export const useLang = () => useContext(LanguageContext).lang;

const OvenIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number | string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 21V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V21" />
    <path d="M8 21V11.5C8 9.01472 10.0147 7 12 7C13.9853 7 16 9.01472 16 11.5V21" />
    <path d="M4 21H20" />
    <path d="M4 16H8" />
    <path d="M16 16H20" />
    <path d="M4 11H8" />
    <path d="M16 11H20" />
    <path d="M5.5 7L8.5 9" />
    <path d="M18.5 7L15.5 9" />
    <path d="M9.5 4L10.5 7" />
    <path d="M14.5 4L13.5 7" />
    <path
      d="M12 21C12 21 9.5 18 9.5 15C9.5 13.5 10.5 12 12 10C12 10 11.5 13 12 14C12.5 12 13.5 11.5 13.5 14C13.5 16.5 12 21 12 21Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const FullLogo = ({
  className = "",
  widthClassName = "w-48 md:w-64 lg:w-80", // Increased baseline size
}: {
  className?: string;
  widthClassName?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center mx-auto ${widthClassName} ${className}`}
    >
      <svg
        viewBox="0 0 300 140"
        className="w-full h-auto overflow-visible"
        aria-label="Vívono Pizzeria Logo"
      >
        <defs>
          <path id="archPath" d="M 120 40 A 30 30 0 0 1 180 40" />
        </defs>

        {/* PIZZERIA Text Arch */}
        <text
          fill="currentColor"
          className="font-sans font-bold uppercase"
          fontSize="10"
          letterSpacing="0.2em"
          opacity="0.85"
        >
          <textPath href="#archPath" startOffset="50%" textAnchor="middle">
            PIZZERIA
          </textPath>
        </text>

        {/* Oven Icon Group */}
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* Base */}
          <line x1="125" y1="68" x2="175" y2="68" strokeWidth="2.5" />

          {/* Outer Arch */}
          <path d="M 132 68 L 132 54 A 18 18 0 0 1 168 54 L 168 68" />

          {/* Inner Arch */}
          <path d="M 140 68 L 140 54 A 10 10 0 0 1 160 54 L 160 68" />

          {/* Vertical Bricks */}
          <line x1="132" y1="61" x2="140" y2="61" />
          <line x1="168" y1="61" x2="160" y2="61" />

          {/* Radial Bricks Left */}
          <line x1="132.7" y1="49.4" x2="140.4" y2="51.5" />
          <line x1="137.3" y1="41.3" x2="143" y2="47" />
          <line x1="145.4" y1="36.7" x2="147.5" y2="44.4" />

          {/* Radial Bricks Right */}
          <line x1="167.3" y1="49.4" x2="159.6" y2="51.5" />
          <line x1="162.7" y1="41.3" x2="157" y2="47" />
          <line x1="154.6" y1="36.7" x2="152.5" y2="44.4" />
        </g>

        {/* Flame and Wood */}
        <g fill="currentColor" stroke="none">
          {/* Logs */}
          <rect x="144" y="64" width="12" height="1.5" rx="0.5" />
          <rect x="146" y="61" width="8" height="1.5" rx="0.5" />
          {/* Flame - 3 tips */}
          <path d="M150 48 Q 148 52 147 54 Q 144 53 144 56 Q 144 60 150 60 Q 156 60 156 56 Q 156 53 153 54 Q 152 52 150 48 Z" />
        </g>

        {/* VÍVONO Main Text */}
        <text
          x="150"
          y="108"
          fill="currentColor"
          textAnchor="middle"
          className="font-serif font-semibold"
          fontSize="48"
          letterSpacing="-0.02em"
        >
          VÍVONO
        </text>

        {/* ARTE. ORIGINE. PASSIONE. Subtext */}
        <text
          x="150"
          y="128"
          fill="currentColor"
          textAnchor="middle"
          className="font-sans font-bold uppercase"
          fontSize="6"
          letterSpacing="0.25em"
          opacity="0.6"
        >
          ARTE. ORIGINE. PASSIONE.
        </text>
      </svg>
    </div>
  );
};

const SimpleCarousel = ({
  items,
  renderItem,
  darkTheme = false,
  itemWidthClassName = "w-[100vw] lg:w-[33.333333%]",
  itemClassName,
}: {
  items: any[];
  renderItem: (item: any, index: number, total: number) => ReactNode;
  darkTheme?: boolean;
  itemWidthClassName?: string;
  itemClassName?: (item: any, index: number) => string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const lang = useLang();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        // Using a 5px tolerance to account for any decimal pixel rounding errors and snap snapping issues
        setCanScrollRight(Math.abs(scrollWidth - clientWidth - scrollLeft) > 5);
      }
    };

    handleScroll();

    const currentRef = containerRef.current;
    if (currentRef) currentRef.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      if (currentRef) currentRef.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      const container = containerRef.current;
      const child = container.children[0] as HTMLElement;

      const computedStyle = window.getComputedStyle(container);
      const gap = parseFloat(computedStyle.gap) || 0;
      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;

      const scrollLeft = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];

      const center = scrollLeft + container.clientWidth / 2;
      let currentChildIndex = 0;
      let minDistance = Infinity;

      children.forEach((c, i) => {
        const childCenter = c.offsetLeft - paddingLeft + c.offsetWidth / 2;
        const distance = Math.abs(childCenter - center);
        if (distance < minDistance) {
          minDistance = distance;
          currentChildIndex = i;
        }
      });

      const nextIndex =
        direction === "left"
          ? Math.max(0, currentChildIndex - 1)
          : Math.min(children.length - 1, currentChildIndex + 1);

      const targetChild = children[nextIndex];

      if (targetChild) {
        container.scrollTo({
          left: targetChild.offsetLeft - paddingLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const arrowBaseColor = darkTheme
    ? "text-white/40 bg-black/10 backdrop-blur-[2px]"
    : "text-[#1A2A1A]/40 bg-white/30 backdrop-blur-[2px]";
  const arrowHoverColor = darkTheme
    ? "hover:text-white hover:bg-black/60"
    : "hover:text-[#1A2A1A] hover:bg-white/60";

  return (
    <div className="relative group w-full">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full items-stretch relative z-10 px-[4.5rem]"
      >
        {items.map((item, index) => (
          <div
            key={item.id || item.title || index}
            className={`${itemWidthClassName} ${itemClassName ? itemClassName(item, index) : ""} shrink-0 flex flex-col items-stretch ${index === items.length - 1 ? "snap-end sm:snap-start" : "snap-start"}`}
          >
            {renderItem(item, index, items.length)}
          </div>
        ))}
      </div>

      {/* Swipe Indicator for Mobile/Tablet */}
      {(canScrollLeft || canScrollRight) && (
        <div 
          className={`xl:hidden flex flex-col justify-center items-center mt-6 gap-2 ${darkTheme ? "text-white/40" : "text-[#1A2A1A]/40"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          >
            <path d="M13 17l5-5-5-5" />
            <path d="M6 17l5-5-5-5" />
          </svg>
          <span className="text-[10px] uppercase tracking-widest font-bold">
            {lang === "pt" ? "Deslize para explorar" : "Swipe to explore"}
          </span>
        </div>
      )}
    </div>
  );
};

const Navbar = ({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string) => void;
  currentPage: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: lang === "pt" ? "O Menu" : "Menu",
      action: () => {
        onNavigate("menu");
      },
    },
    {
      label: lang === "pt" ? "Nossa Arte" : "Our Craft",
      action: () => {
        if (currentPage !== "home") onNavigate("home");
        setTimeout(
          () =>
            document
              .getElementById("nossa-arte")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
    {
      label: lang === "pt" ? "Localização" : "Location",
      action: () => {
        if (currentPage !== "home") onNavigate("home");
        setTimeout(
          () =>
            document
              .getElementById("localizacao")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
    {
      label: "Uber Eats",
      href: "https://www.ubereats.com/pt/store/vivono-pizzeria/vEwTaRGXVuGc77hO2sTBEg?srsltid=AfmBOorTCq-rPXzKDHQKw4js1pOVVTOV44AWZETMyNAFO1G1xX3xHAH8",
      isExternal: true,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-[#E9E4D9]/90 backdrop-blur-md border-b border-[#D1CCBF] py-6" : "bg-transparent py-10"}`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-[4.5rem] flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-center cursor-pointer group shrink-0"
          >
            <div className="text-[10px] md:text-[8px] lg:text-xs tracking-[0.4em] uppercase font-bold opacity-40 mb-1">
              Pizzeria
            </div>
            <div className="font-display font-bold text-3xl md:text-2xl lg:text-4xl tracking-tighter text-[#1A2A1A] uppercase">
              Vívono
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-14 text-[10px] lg:text-sm font-bold uppercase tracking-[0.25em] text-[#1A2A1A]/70">
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else if (item.isExternal) {
                    window.open(item.href, "_blank", "noopener,noreferrer");
                  } else if (item.href) {
                    const el = document.querySelector(item.href);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-[#1A2A1A] transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#1A2A1A] transition-all group-hover:w-full" />
              </motion.button>
            ))}
            <a
              href="https://reservation.dish.co/shortlink/339850"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-7 py-3 bg-[#1A2A1A] text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#0A1A0A] transition-colors font-sans whitespace-nowrap"
            >
              {lang === "pt" ? "Reservar" : "Book Table"}
            </a>
            <div className="flex items-center gap-2 pl-4 border-l border-[#1A2A1A]/20">
              <button
                onClick={() => setLang("pt")}
                className={`text-[9px] font-bold uppercase tracking-widest transition-opacity ${lang === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                PT
              </button>
              <span className="text-[9px] opacity-40">|</span>
              <button
                onClick={() => setLang("en")}
                className={`text-[9px] font-bold uppercase tracking-widest transition-opacity ${lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#1A2A1A] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-[#E9E4D9] z-40 flex flex-col items-center justify-center text-[#1A2A1A] min-h-screen pt-20"
          >
            <motion.div
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-8 text-center px-6"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.action) {
                      item.action();
                    } else if (item.isExternal) {
                      window.open(item.href, "_blank", "noopener,noreferrer");
                    } else if (item.href) {
                      const el = document.querySelector(item.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-4xl font-display font-medium hover:opacity-50 transition-opacity"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-8 flex gap-8">
                <a
                  href="https://www.instagram.com/vivonopizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/vivonopizzeria?locale=pt_PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=351911868823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
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
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#1A2A1A]/20">
                <button
                  onClick={() => {
                    setLang("pt");
                    setTimeout(() => setIsOpen(false), 300);
                  }}
                  className={`text-xs font-bold uppercase tracking-widest transition-opacity ${lang === "pt" ? "opacity-100" : "opacity-40"}`}
                >
                  PT
                </button>
                <button
                  onClick={() => {
                    setLang("en");
                    setTimeout(() => setIsOpen(false), 300);
                  }}
                  className={`text-xs font-bold uppercase tracking-widest transition-opacity ${lang === "en" ? "opacity-100" : "opacity-40"}`}
                >
                  EN
                </button>
              </div>
            </motion.div>
            <button
              className="absolute top-10 right-8 text-[#1A2A1A]"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuSection = () => {
  const lang = useLang();
  const categories_pt = [
    {
      title: "Entradas",
      items: [
        {
          name: "Azeitonas Marinadas",
          info: "Azeitonas verdes marinadas com azeite, ervas e um toque cítrico.",
          price: "1,90",
        },
        {
          name: "Queijo Curado",
          info: "Fatias de queijo português curado.",
          price: "4,90",
        },
        {
          name: "Tábua de Charcutaria",
          info: "Salame italiano, Presunto de Parma, chourição, mortadella com pistache servido com crostini artesanal.",
          price: "13,90",
        },
        {
          name: "Pão de Alho",
          info: "Pão artesanal servido com pasta de ricotta e alho.",
          price: "5,90",
          isFavorite: true,
        },
        {
          name: "Crostini",
          info: "Crostini com alecrim fresco e toque de flor de sal, servido com pesto rosso artesanal.",
          price: "5,90",
        },
        {
          name: "Burrata Assada",
          info: "Burrata assada e tomate cereja confitado servido com crostini artesanal.",
          price: "10,90",
          isFavorite: true,
        },
        {
          name: "Burrata Fresca",
          info: "Burrata com rúcula, tomate cereja, servido com pesto e crostini artesanais.",
          price: "9,90",
        },
      ],
    },
    {
      title: "Pizzas Clássicas",
      items: [
        {
          name: "Margherita",
          info: "Molho San Marzano, Mozzarella Fior di Latte, folhas de manjericão.",
          price: "10,90",
          isFavorite: true,
        },
        {
          name: "Salame",
          info: "Molho San Marzano, Mozzarella Fior di Latte, salame italiano.",
          price: "13,90",
        },
        {
          name: "Quattro Formaggi",
          info: "Mozzarella Fior di Latte, Grana Padano, Gorgonzola, Feta, mel, folhas de manjericão.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Marinara",
          info: "Molho San Marzano, alho, orégano, manjericão.",
          price: "10,70",
        },
        {
          name: "Pepperoni",
          info: "Molho San Marzano, Mozzarella Fior di Latte, pepperoni.",
          price: "12,70",
          isFavorite: true,
          spicy: 1,
        },
        {
          name: "Diavola",
          info: "Molho San Marzano, Mozzarella Fior di Latte, pepperoni e 'Nduja, cebola roxa.",
          price: "14,90",
          isFavorite: true,
          spicy: 2,
        },
        {
          name: "Fiambre",
          info: "Molho San Marzano, Mozzarella Fior di Latte, fiambre.",
          price: "12,70",
          isFavorite: true,
        },
      ],
    },
    {
      title: "Seleção Vívono",
      items: [
        {
          name: "Vívono",
          info: "Molho San Marzano, stracciatella, pesto artesanal, tomate cereja e folhas de manjericão.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Chourição",
          info: "Molho San Marzano, Mozzarella Fior di Latte, chourição.",
          price: "12,70",
        },
        {
          name: "Prosciutto e Funghi",
          info: "Molho San Marzano, Mozzarella Fior di Latte, presunto cotto, cogumelo.",
          price: "13,90",
        },
        {
          name: "Prosciutto Crudo",
          info: "Molho San Marzano, Mozzarella Fior di Latte, Presunto de Parma.",
          price: "15,90",
        },
        {
          name: "Mortadela Stracciatella",
          info: "Mozzarella Fior di Latte, mortadella, stracciatella, pistache e manjericão.",
          price: "14,90",
          isFavorite: true,
        },
        {
          name: "Tonno",
          info: "Molho San Marzano, Mozzarella Fior di Latte, atum, cebola roxa, azeitona, rúcula.",
          price: "13,70",
        },
        {
          name: "Anchova",
          info: "Molho San Marzano, Grana Padano, anchovas, alcaparras, tomate cereja, manjericão e orégano.",
          price: "12,90",
        },
        {
          name: "Al Funghi Tartufo",
          info: "Mozzarella Fior di Latte, ricotta com molho de trufas, cebola caramelizada, cogumelos, azeite trufado, Grana Padano, folhas de manjericão.",
          price: "15,90",
        },
        {
          name: "Giardino",
          info: "Molho San Marzano, Mozzarella Fior di Latte, tomate cereja, courgette assada, beringela assada, rúcula.",
          price: "12,90",
        },
      ],
    },
    {
      title: "Brasileiras",
      items: [
        {
          name: "Brasiliana",
          info: "Molho San Marzano, Mozzarella Fior di Latte, frango e queijo tipo catupiry, finalizada com orégano e azeite extravirgem.",
          price: "14,90",
          isFavorite: true,
        },
        {
          name: "Calabrese",
          info: "Molho San Marzano, Mozzarella Fior di Latte, calabresa brasileira e cebola.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Lusitana",
          info: "Molho San Marzano, Mozzarella Fior di Latte, fiambre, cebola, ovo e azeitonas verdes.",
          price: "13,70",
        },
      ],
    },
    {
      title: "Dolce",
      items: [
        {
          name: "Gelato",
          info: "Perguntar sabores disponíveis.",
          price: "3,70",
        },
        {
          name: "Pudim",
          info: "Sobremesa cremosa à base de leite condensado, ovos e leite, coberta com calda de caramelo.",
          price: "4,70",
        },
        {
          name: "Tiramisu Vívono",
          info: "Camadas suaves de creme de pistache com mascarpone, biscoitos Savoiardi embebidos em café e finalização com pistache torrado.",
          price: "5,90",
        },
        {
          name: "Brownie",
          info: "Brownie artesanal de chocolate servido com gelato de baunilha e calda de chocolate.",
          price: "5,70",
        },
        {
          name: "Nutella Calzone",
          info: "Recheado generosamente com Nutella.",
          price: "10,70",
        },
      ],
    },
  ];

  const categories_en = [
    {
      title: "Starters",
      items: [
        {
          name: "Marinated Olives",
          info: "Green olives marinated with olive oil, herbs, and a citrus touch.",
          price: "1,90",
        },
        {
          name: "Cured Cheese",
          info: "Slices of cured Portuguese cheese.",
          price: "4,90",
        },
        {
          name: "Charcuterie Board",
          info: "Italian salami, Parma Ham, spicy salami, mortadella with pistachio served with artisan crostini.",
          price: "13,90",
        },
        {
          name: "Garlic Bread",
          info: "Artisan bread served with ricotta paste and garlic.",
          price: "5,90",
          isFavorite: true,
        },
        {
          name: "Crostini",
          info: "Crostini with fresh rosemary and a touch of flor de sal, served with artisan pesto rosso.",
          price: "5,90",
        },
        {
          name: "Baked Burrata",
          info: "Baked burrata and confit cherry tomato served with artisan crostini.",
          price: "10,90",
          isFavorite: true,
        },
        {
          name: "Fresh Burrata",
          info: "Burrata with arugula, cherry tomato, served with artisan pesto and crostini.",
          price: "9,90",
        },
      ],
    },
    {
      title: "Classic Pizzas",
      items: [
        {
          name: "Margherita",
          info: "San Marzano sauce, Mozzarella Fior di Latte, basil leaves.",
          price: "10,90",
          isFavorite: true,
        },
        {
          name: "Salame",
          info: "San Marzano sauce, Mozzarella Fior di Latte, Italian salami.",
          price: "13,90",
        },
        {
          name: "Quattro Formaggi",
          info: "Mozzarella Fior di Latte, Grana Padano, Gorgonzola, Feta, honey, basil leaves.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Marinara",
          info: "San Marzano sauce, garlic, oregano, basil.",
          price: "10,70",
        },
        {
          name: "Pepperoni",
          info: "San Marzano sauce, Mozzarella Fior di Latte, pepperoni.",
          price: "12,70",
          isFavorite: true,
          spicy: 1,
        },
        {
          name: "Diavola",
          info: "San Marzano sauce, Mozzarella Fior di Latte, pepperoni and 'Nduja, red onion.",
          price: "14,90",
          isFavorite: true,
          spicy: 2,
        },
        {
          name: "Fiambre",
          info: "San Marzano sauce, Mozzarella Fior di Latte, ham.",
          price: "12,70",
          isFavorite: true,
        },
      ],
    },
    {
      title: "Vívono Selection",
      items: [
        {
          name: "Vívono",
          info: "San Marzano sauce, stracciatella, artisan pesto, cherry tomato, and basil leaves.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Chourição",
          info: "San Marzano sauce, Mozzarella Fior di Latte, spicy salami.",
          price: "12,70",
        },
        {
          name: "Prosciutto e Funghi",
          info: "San Marzano sauce, Mozzarella Fior di Latte, prosciutto cotto, mushrooms.",
          price: "13,90",
        },
        {
          name: "Prosciutto Crudo",
          info: "San Marzano sauce, Mozzarella Fior di Latte, Parma Ham.",
          price: "15,90",
        },
        {
          name: "Mortadela Stracciatella",
          info: "Mozzarella Fior di Latte, mortadella, stracciatella, pistachio, and basil.",
          price: "14,90",
          isFavorite: true,
        },
        {
          name: "Tonno",
          info: "San Marzano sauce, Mozzarella Fior di Latte, tuna, red onion, black olives, arugula.",
          price: "13,70",
        },
        {
          name: "Anchova",
          info: "San Marzano sauce, Grana Padano, anchovies, capers, cherry tomato, basil, and oregano.",
          price: "12,90",
        },
        {
          name: "Al Funghi Tartufo",
          info: "Mozzarella Fior di Latte, ricotta with truffle sauce, caramelized onion, mushrooms, truffle oil, Grana Padano, basil leaves.",
          price: "15,90",
        },
        {
          name: "Giardino",
          info: "San Marzano sauce, Mozzarella Fior di Latte, cherry tomato, roasted zucchini, roasted eggplant, arugula.",
          price: "12,90",
        },
      ],
    },
    {
      title: "Brazilian Style",
      items: [
        {
          name: "Brasiliana",
          info: "San Marzano sauce, Mozzarella Fior di Latte, chicken and catupiry-style cheese, finished with oregano and extra virgin olive oil.",
          price: "14,90",
          isFavorite: true,
        },
        {
          name: "Calabrese",
          info: "San Marzano sauce, Mozzarella Fior di Latte, Brazilian calabrese sausage and onion.",
          price: "13,90",
          isFavorite: true,
        },
        {
          name: "Lusitana",
          info: "San Marzano sauce, Mozzarella Fior di Latte, ham, onion, egg, and green olives.",
          price: "13,70",
        },
      ],
    },
    {
      title: "Dolce",
      items: [
        { name: "Gelato", info: "Ask for available flavors.", price: "3,70" },
        {
          name: "Pudim",
          info: "Creamy dessert made with condensed milk, eggs, and milk, covered in caramel sauce.",
          price: "4,70",
        },
        {
          name: "Tiramisu Vívono",
          info: "Smooth layers of pistachio cream with mascarpone, Savoiardi biscuits soaked in coffee, finished with roasted pistachio.",
          price: "5,90",
        },
        {
          name: "Brownie",
          info: "Artisan chocolate brownie served with vanilla gelato and chocolate syrup.",
          price: "5,70",
        },
        {
          name: "Nutella Calzone",
          info: "Generously stuffed with Nutella.",
          price: "10,70",
        },
      ],
    },
  ];

  const categories = lang === "pt" ? categories_pt : categories_en;

  return (
    <section
      id="cardapio"
      className="bg-[#E9E4D9] text-[#1A2A1A] pt-32 pb-20 border-t border-[#D1CCBF]"
    >
      <div className="w-full px-[4.5rem] relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <FullLogo
            widthClassName="w-48 md:w-64"
            className="text-[#1A2A1A] mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-8 mb-2 uppercase">
            {lang === "pt" ? "O Menu" : "Menu"}
          </h1>
        </div>

        <div className="space-y-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-3xl md:text-5xl font-display italic mb-10 border-b border-[#1A2A1A]/10 pb-4 uppercase tracking-tighter">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex flex-col group">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-xl md:text-2xl font-display font-semibold min-w-fit leading-none flex items-center gap-2">
                        {item.name}
                        {item.spicy && (
                          <span
                            className="flex items-center gap-0.5 text-[#1A2A1A] ml-2"
                            title="Picante"
                          >
                            {[...Array(item.spicy)].map((_, i) => (
                              <Flame
                                key={i}
                                size={14}
                                className="fill-[#1A2A1A]/20"
                              />
                            ))}
                          </span>
                        )}
                        {item.isFavorite && (
                          <span
                            className="text-[8px] font-sans font-bold uppercase tracking-widest bg-[#143020] text-[#E9E4D9] px-2 py-1 rounded-full whitespace-nowrap opacity-90 relative -top-1 ml-1"
                            title="Favorito da Casa"
                          >
                            Favorito
                          </span>
                        )}
                      </h3>
                      <div className="flex-1 mx-4 border-b border-dotted border-[#1A2A1A]/20" />
                      <span className="text-lg md:text-xl font-display font-medium flex-shrink-0 leading-none">
                        {item.price}€
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-[#1A2A1A]/60 font-serif italic leading-relaxed">
                      {item.info}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-[#1A2A1A]/10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-40 mb-8">
            {lang === "pt"
              ? "Informações sobre Alérgenos disponível sob consulta"
              : "Allergen information available on request"}
          </p>
          <div className="flex justify-center gap-10">
            <a
              href="https://reservation.dish.co/shortlink/339850"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#1A2A1A] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all font-sans"
            >
              {lang === "pt" ? "Reservar Mesa" : "Book a Table"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const lang = useLang();
  return (
    <section className="relative pt-24 pb-16 md:pb-12 lg:pb-32 overflow-hidden min-h-[60vh] lg:min-h-[70vh] flex items-start lg:items-center mt-12 md:mt-16 bg-[#E9E4D9]">
      <div className="w-full px-4 sm:px-8 lg:px-[4.5rem] relative z-10 text-[#1A2A1A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-10 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center lg:items-start lg:justify-start xl:items-center xl:justify-center w-full text-center lg:text-left xl:text-center lg:pl-[8%] xl:pl-0"
            >
              <FullLogo
                widthClassName="w-72 sm:w-[26rem] md:w-[34rem] lg:w-[44rem] xl:w-[48rem]"
                className="text-[#1A2A1A] mb-8 lg:mb-12 mt-2 lg:-translate-x-14"
              />

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:items-start lg:justify-start xl:justify-center gap-6 sm:gap-12 lg:gap-6 xl:gap-12 w-full mt-2 lg:translate-x-[6.7rem] xl:translate-x-[4.5rem]">
                <button
                  onClick={onOpenMenu}
                  className="flex items-center gap-5 text-sm md:text-base font-bold uppercase tracking-[0.3em] group border-b-2 border-[#1A2A1A] pb-3 hover:opacity-70 transition-all font-sans"
                >
                  {lang === "pt" ? "Explorar o Menu" : "Explore Menu"}{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>

                <a
                  href="https://www.ubereats.com/pt/store/vivono-pizzeria/vEwTaRGXVuGc77hO2sTBEg?srsltid=AfmBOorTCq-rPXzKDHQKw4js1pOVVTOV44AWZETMyNAFO1G1xX3xHAH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-sm md:text-base font-bold uppercase tracking-[0.3em] group border-b-2 border-[#06C167] text-[#06C167] pb-3 hover:opacity-70 transition-all font-sans"
                >
                  {lang === "pt" ? "Pedir no Uber Eats" : "Order on Uber Eats"}{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative group hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] bg-[#D1CCBF] rounded-[40px] overflow-hidden relative shadow-2xl group lg:w-[65%] lg:ml-auto lg:mr-12"
            >
              <img
                src={heroImg}
                alt="Vívono Sourdough Pizza"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#1A2A1A]/80" />
              <div className="absolute bottom-12 left-12 right-12 p-8 border border-white/20 rounded-2xl backdrop-blur-sm bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-2">
                  {lang === "pt" ? "Nossas Pizzas" : "Our Pizzas"}
                </div>
                <div className="text-xl font-serif text-white/90 text-balance leading-tight italic">
                  {lang === "pt"
                    ? "Preparadas com fermentação lenta (48 - 72 hrs), assadas em forno a lenha tradicional e elaboradas com ingredientes selecionados."
                    : "Prepared with slow fermentation (48 - 72 hrs), baked in a traditional wood-fired oven and crafted with selected ingredients."}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-16 hidden md:block">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#1A2A1A]/40 font-bold vertical-text rotate-180 flex items-center gap-4 font-sans">
          <span className="w-10 h-[1px] bg-[#1A2A1A]/30" /> SOURDOUGH
          FERMENTAÇÃO NATURAL
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const lang = useLang();
  const menuItems = [
    {
      title: "Prosciutto e Funghi",
      tagline:
        "Molho San Marzano, Mozzarella Fior di Latte, Prosciutto Cotto e cogumelos.",
      id: "I",
      image: menuImg1,
    },
    {
      title: "Anchova",
      tagline:
        "Molho de tomate San Marzano, anchovas, alcaparras, Grana Padano e tomate cereja.",
      id: "II",
      image: menuImg2,
    },
    {
      title: "Brasiliana",
      tagline:
        "Molho San Marzano, Mozzarella Fior di Latte, frango e queijo tipo catupiry, finalizada com orégano e azeite extravirgem.",
      id: "III",
      image: menuImg3,
    },
  ];

  return (
    <section
      id="o-menu"
      className="py-20 md:pt-24 md:pb-40 bg-[#E9E4D9] border-t border-[#D1CCBF]"
    >
      <div className="w-full px-[4.5rem]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-8 text-[#1A2A1A]">
              {lang === "pt" ? "A Coleção" : "The Collection"}
            </h2>
            <p className="text-[#1A2A1A]/70 text-2xl md:text-2xl lg:text-3xl leading-relaxed font-serif max-w-2xl italic">
              {lang === "pt"
                ? "Cada preparação é um estudo de textura. Ingredientes mínimos, intenção máxima."
                : "Each preparation is a study in texture. Minimal ingredients, maximum intention."}
            </p>
          </div>
        </div>

        <div className="-mx-[4.5rem]">
          <SimpleCarousel
            itemWidthClassName="w-[100vw] sm:w-[50%] xl:w-[33.333333%]"
            items={menuItems}
            renderItem={(item, index, total) => {
              return (
                <div className="flex flex-col h-full px-4 sm:px-8 lg:px-10 xl:px-6">
                  <div
                    className={`aspect-[4/5] bg-[#D1CCBF] rounded-[40px] mb-6 md:mb-10 overflow-hidden relative shadow-sm`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-4 right-4 md:top-10 md:right-10 text-2xl md:text-4xl font-display italic text-white/40">
                      {item.id}
                    </div>
                  </div>
                  <div className="px-4 md:px-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#1A2A1A]/70 font-serif italic tracking-wide break-words whitespace-normal">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

const Craft = () => {
  const lang = useLang();
  return (
    <section id="nossa-arte" className="py-40 bg-[#1A2A1A] text-[#E9E4D9]">
      <div className="w-full px-[4.5rem]">
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-display font-medium tracking-tight mb-12 leading-[0.9]">
            Arte. Origine. <br />
            <span className="italic font-serif font-light text-[#D1CCBF]">
              Passione.
            </span>
          </h2>
          <p className="text-2xl md:text-2xl lg:text-4xl text-[#D1CCBF]/80 leading-relaxed font-serif italic">
            "
            {lang === "pt"
              ? "A pizza é apenas o início. O que entregamos tem um significado."
              : "Pizza is just the beginning. What we deliver has meaning."}
            "
          </p>
        </div>

        <div className="-mx-[4.5rem]">
          <SimpleCarousel
            itemWidthClassName="w-[100vw] sm:w-[50%] xl:w-[33.333333%]"
            darkTheme={true}
            items={[
              {
                id: "Arte",
                title: "Arte",
                image:
                  "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop",
                desc:
                  lang === "pt"
                    ? "Respeito profundo pelos ritmos naturais que a verdadeira qualidade exige. Processos cuidadosos, ingredientes selecionados e o calor do forno a lenha revelam um sabor que permanece."
                    : "Deep respect for the natural rhythms that authentic quality demands. Careful processes, selected ingredients, and the heat of the wood-fired oven reveal a flavor that lingers.",
              },
              {
                id: "Origine",
                title: "Origine",
                image:
                  "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop",
                desc:
                  lang === "pt"
                    ? "A fusão de duas trajetórias: uma vinda da Itália, outra da memória afetiva. Trazemos mais do que técnica; trazemos respeito ao tempo, ao fogo e à verdade de cada ingrediente."
                    : "A fusion of two paths: one from Italy, another from affective memory. We bring more than technique; we bring respect to time, fire, and the truth of each ingredient.",
              },
              {
                id: "Passione",
                title: "Passione",
                image:
                  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
                desc:
                  lang === "pt"
                    ? "Entrega visceral e intuição precisa do sabor. Nossa cozinha é memória, é o silêncio que ouve a massa. Toda marca com verdade tem alma, toda mesa preparada com intenção tem poder."
                    : "Visceral dedication and precise intuition of flavor. Our kitchen is memory, it is the silence that listens to the dough. Every brand with truth has a soul, every table prepared with intention holds power.",
              },
            ]}
            renderItem={(item, index, total) => {
              return (
                <div className="flex flex-col h-full px-4 sm:px-8 lg:px-10 xl:px-6">
                  <div
                    className={`aspect-[4/5] overflow-hidden rounded-[40px] mb-4 md:mb-8 md:shadow-lg`}
                  >
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="px-6 md:px-0">
                    <h3 className="text-2xl md:text-3xl font-display italic text-[#D1CCBF]">
                      {item.title}
                    </h3>
                    <p className="text-[#D1CCBF]/70 font-serif italic leading-relaxed text-sm md:text-xl line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

const Promotions = () => {
  const lang = useLang();
  return (
    <section className="pt-24 pb-12 md:py-32 bg-[#E9E4D9] border-t border-[#D1CCBF]">
      <div className="w-full px-[4.5rem] text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block text-[#1A2A1A]/40">
          {lang === "pt" ? "Eventos & Promoções" : "Events & Promotions"}
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-[#1A2A1A] mb-16">
          {lang === "pt"
            ? "Na Nossa Casa, Esta Semana"
            : "At Our House, This Week"}
        </h2>

        <div className="-mx-[4.5rem]">
          <SimpleCarousel
            itemWidthClassName="w-[100vw] sm:w-[50%] xl:w-[33.333333%]"
            items={[
              {
                id: "promo-1",
                icon: <Beer size={32} />,
                title:
                  lang === "pt" ? "Imperial em Dobro" : "Double Draft Beer",
                subtitle:
                  lang === "pt" ? "Terça à Quinta" : "Tuesday to Thursday",
                time: "19:00 " + (lang === "pt" ? "às" : "to") + " 21:00",
                bgColor: "bg-white/40",
                textColor: "text-[#1A2A1A]",
                borderColor: "border-[#1A2A1A]/10",
              },
              {
                id: "promo-2",
                icon: <Martini size={32} />,
                bgIcon: <Martini size={120} />,
                title:
                  lang === "pt" ? "Coquetéis 50% Off" : "Cocktails 50% Off",
                subtitle: lang === "pt" ? "Toda as Quintas" : "Every Thursday",
                time: "19:00 " + (lang === "pt" ? "às" : "to") + " 21:00",
                bgColor: "bg-[#1A2A1A]",
                textColor: "text-[#E9E4D9]",
                borderColor: "border-[#1A2A1A]",
                shadow: "shadow-2xl",
              },
              {
                id: "promo-3",
                icon: <Mic size={32} />,
                title: lang === "pt" ? "Música ao Vivo" : "Live Music",
                subtitle:
                  lang === "pt" ? "Alguns Fins de Semana" : "Some Weekends",
                desc:
                  lang === "pt"
                    ? "Consulte a nossa equipa e acompanhe-nos nas redes sociais."
                    : "Ask our team and follow us on social media.",
                bgColor: "bg-white/40",
                textColor: "text-[#1A2A1A]",
                borderColor: "border-[#1A2A1A]/10",
              },
            ]}
            renderItem={(item, index, total) => {
              return (
                <div className="flex flex-col h-full px-0 md:px-4 lg:px-6">
                  <div
                    className={`p-8 md:p-6 lg:p-10 ${item.borderColor} border-y md:border ${item.bgColor} ${item.textColor} ${item.shadow || ""} rounded-none md:rounded-[30px] relative overflow-hidden h-full flex flex-col items-start text-left`}
                  >
                    {item.bgIcon && (
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        {item.bgIcon}
                      </div>
                    )}
                    <div className="mb-4 lg:mb-6 opacity-60 relative z-10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-xl lg:text-2xl font-display font-medium tracking-tight mb-2 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-sans font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase opacity-60 mb-2 mt-auto lg:mb-4 relative z-10">
                      {item.subtitle}
                    </p>
                    {item.time && (
                      <p
                        className={`text-sm lg:text-base font-serif italic mb-4 lg:mb-6 relative z-10 ${item.textColor === "text-[#E9E4D9]" ? "text-[#E9E4D9]/70" : "text-[#1A2A1A]/70"}`}
                      >
                        {item.time}
                      </p>
                    )}
                    {item.desc && (
                      <p
                        className={`text-sm lg:text-base font-serif italic mb-4 lg:mb-6 relative z-10 ${item.textColor === "text-[#E9E4D9]" ? "text-[#E9E4D9]/70" : "text-[#1A2A1A]/70"}`}
                      >
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const lang = useLang();
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-24 bg-[#143020] text-[#E9E4D9]">
      <div className="w-full px-[4.5rem] text-center flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block opacity-60">
          Social
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
          @vivonopizzeria
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <a
            href="https://www.instagram.com/vivonopizzeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold pb-2 border-b border-[#E9E4D9]/30 text-[#E9E4D9] hover:opacity-50 transition-opacity font-sans"
          >
            {lang === "pt" ? "Seguir no Instagram" : "Follow on Instagram"}{" "}
            <ArrowRight size={14} />
          </a>
          <a
            href="https://www.ubereats.com/pt/store/vivono-pizzeria/vEwTaRGXVuGc77hO2sTBEg?srsltid=AfmBOorTCq-rPXzKDHQKw4js1pOVVTOV44AWZETMyNAFO1G1xX3xHAH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold pb-2 border-b border-[#06C167] text-[#06C167] hover:opacity-50 transition-opacity font-sans"
          >
            {lang === "pt" ? "Pedir no Uber Eats" : "Order on Uber Eats"}{" "}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

const LocationMap = () => {
  const lang = useLang();
  return (
    <section
      id="localizacao"
      className="pt-4 pb-0 md:pt-24 md:pb-0 bg-[#E9E4D9] border-b border-[#D1CCBF]"
    >
      <div className="w-full px-[4.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-[#1A2A1A] mb-8 font-sans">
              {lang === "pt" ? "Localização & Contato" : "Location & Contact"}
            </h4>
            <ul className="text-sm md:text-base space-y-4 font-semibold text-[#1A2A1A]/80 font-sans mb-12">
              <li className="flex items-center gap-3">
                <MapPin size={16} /> R. José Silvestre 10, Mafra
              </li>
              <li className="pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vívono+Pizzeria+Mafra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-[#1A2A1A] text-white rounded-full text-[9px] uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  {lang === "pt" ? "Obter Direções" : "Get Directions"}{" "}
                  <ArrowRight size={12} />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> +351 911 868 823
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} />
                <a
                  href="https://api.whatsapp.com/send?phone=351911868823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity underline decoration-dotted font-bold"
                >
                  WhatsApp (+351 911 868 823)
                </a>
              </li>
              <li className="pt-4 flex items-center gap-6">
                <a
                  href="https://www.instagram.com/vivonopizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 cursor-pointer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/vivonopizzeria?locale=pt_PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 cursor-pointer"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=351911868823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.ubereats.com/pt/store/vivono-pizzeria/vEwTaRGXVuGc77hO2sTBEg?srsltid=AfmBOorTCq-rPXzKDHQKw4js1pOVVTOV44AWZETMyNAFO1G1xX3xHAH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06C167] font-bold text-[10px] tracking-widest uppercase hover:opacity-50 cursor-pointer border-b border-[#06C167] pb-1"
                >
                  Uber Eats
                </a>
              </li>
            </ul>

            <h4 className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-[#1A2A1A] mb-8 font-sans">
              {lang === "pt" ? "Horários" : "Opening Hours"}
            </h4>
            <ul className="text-sm md:text-base space-y-3 font-semibold text-[#1A2A1A]/80 font-sans mb-0 lg:mb-12">
              <li>{lang === "pt" ? "Segunda: Cerrado" : "Monday: Closed"}</li>
              <li>
                {lang === "pt" ? "Ter — Sex" : "Tue — Fri"}: 17:00 — 23:00
              </li>
              <li>
                {lang === "pt" ? "Sáb — Dom" : "Sat — Sun"}: 13:00 — 23:00
              </li>
            </ul>
          </div>
          <div className="w-full h-[400px] md:h-[300px] lg:h-[400px] rounded-[40px] overflow-hidden border border-[#D1CCBF] shadow-sm bg-[#D1CCBF]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=V%C3%ADvono%20Pizzeria%20Mafra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="Localização Vívono Pizzeria"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const lang = useLang();
  const ptReviews = [
    {
      author: "Ricardo Mendes",
      date: "Há 2 meses",
      text: "A melhor pizza que já comi em Portugal. A massa de fermentação lenta é leve e saborosa, e os ingredientes são nitidamente de alta qualidade. O ambiente é muito acolhedor.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Sofia Antunes",
      date: "Há 1 semana",
      text: "Vívono é uma experiência obrigatória em Mafra. A pizza Tartufata é divina! Atendimento impecável e uma carta de vinhos italianos muito bem selecionada.",
      rating: 5,
      visitType: "Almoço em Família",
    },
    {
      author: "João Pereira",
      date: "Há 3 semanas",
      text: "Simplicidade e perfeição. O forno a lenha faz toda a diferença. Recomendo vivamente a burrata de entrada antes da pizza. Cinco estrelas!",
      rating: 5,
      visitType: "Encontro",
    },
    {
      author: "Maria Lourenço",
      date: "Há 1 mês",
      text: "Espaço muito bonito e staff super atencioso. As pizzas artesanais são fantásticas e o Tiramisu é de outro mundo. Recomendo imenso!",
      rating: 5,
      visitType: "Grupo",
    },
    {
      author: "Pedro Silva",
      date: "Há 4 dias",
      text: "Qualidade superior em todos os sentidos. O sabor da massa fermentada é único. Sente-se a paixão em cada detalhe.",
      rating: 5,
      visitType: "Almoço",
    },
    {
      author: "Ana Beatriz",
      date: "Há 2 meses",
      text: "Excelente descoberta. A borda da pizza é crocante e o recheio proporcional. Voltaremos com certeza para provar mais da Seleção Vívono.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Carlos Vicente",
      date: "Há 1 semana",
      text: "Ambiente fantástico e pizza autêntica. A stracciatella na pizza Vívono surpreendeu-me muito. Serviço rápido e atencioso. Definitivamente um lugar a repetir.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Teresa Matos",
      date: "Há 3 dias",
      text: "Foi uma agradável surpresa. As sobremesas não ficam atrás das pizzas! O Tiramisu estava perfeitamente equilibrado. Ótimo atendimento.",
      rating: 5,
      visitType: "Almoço",
    },
    {
      author: "Miguel Costa",
      date: "Há 2 semanas",
      text: "Massa muito leve que não pesa no final. Provamos a Diavola e a Margherita e ambas estavam no ponto. Ingredientes super frescos.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Sara Ribeiro",
      date: "Há 1 mês",
      text: "Sente-se que cada ingrediente é escolhido a dedo, os molhos são muito autênticos. Uma delícia de experiência em pleno Mafra.",
      rating: 5,
      visitType: "Encontro",
    },
    {
      author: "Hugo Silva",
      date: "Há 2 meses",
      text: "Melhor relação qualidade/preço da região se apreciam pizza napolitana verdadeira. Forno impressionante no salão.",
      rating: 5,
      visitType: "Grupo",
    },
    {
      author: "Rita Carvalho",
      date: "Há 5 dias",
      text: "Obrigatória paragem depois de visitar o Palácio Mafra! Pizza e burrata muito saborosas. Bebidas também bem servidas e frescas.",
      rating: 5,
      visitType: "Almoço",
    },
  ];

  const enReviews = [
    {
      author: "Ricardo Mendes",
      date: "2 months ago",
      text: "The best pizza I've ever had in Portugal. The slow-fermented dough is light and tasty, and the ingredients are clearly of high quality. Very welcoming environment.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Sofia Antunes",
      date: "1 week ago",
      text: "Vívono is a must-stop experience in Mafra. The Tartufata pizza is divine! Impeccable service and a very well-selected Italian wine list.",
      rating: 5,
      visitType: "Family Lunch",
    },
    {
      author: "João Pereira",
      date: "3 weeks ago",
      text: "Simplicity and perfection. The wood-fired oven makes all the difference. I highly recommend the burrata starter before the pizza. Five stars!",
      rating: 5,
      visitType: "Date Night",
    },
    {
      author: "Maria Lourenço",
      date: "1 month ago",
      text: "Very beautiful space and super attentive staff. The artisan pizzas are fantastic and the Tiramisu is from another world. Highly recommend!",
      rating: 5,
      visitType: "Group",
    },
    {
      author: "Pedro Silva",
      date: "4 days ago",
      text: "Superior quality in every way. The flavor of the fermented dough is unique. You can feel the passion in every detail.",
      rating: 5,
      visitType: "Lunch",
    },
    {
      author: "Ana Beatriz",
      date: "2 months ago",
      text: "Excellent discovery. The pizza crust is crispy and the filling is proportional. We will surely return to try more of the Vívono Selection.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Carlos Vicente",
      date: "1 week ago",
      text: "Fantastic environment and authentic pizza. The stracciatella in the Vívono pizza really surprised me. Fast and attentive service. Definitely a place to return.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Teresa Matos",
      date: "3 days ago",
      text: "It was a pleasant surprise. The desserts don't fall behind the pizzas! The Tiramisu was perfectly balanced. Great care.",
      rating: 5,
      visitType: "Lunch",
    },
    {
      author: "Miguel Costa",
      date: "2 weeks ago",
      text: "Very light dough that doesn't feel heavy at the end. We tasted Diavola and Margherita and both were perfect. Super fresh ingredients.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Sara Ribeiro",
      date: "1 month ago",
      text: "You can feel that every ingredient is handpicked, the sauces are very authentic. A delightful experience right in Mafra.",
      rating: 5,
      visitType: "Date Night",
    },
    {
      author: "Hugo Silva",
      date: "2 months ago",
      text: "Best price/quality ratio in the region if you appreciate true Neapolitan pizza. Impressive oven in the dining room.",
      rating: 5,
      visitType: "Group",
    },
    {
      author: "Rita Carvalho",
      date: "5 days ago",
      text: "A mandatory stop after visiting the Mafra Palace! Very tasty pizza and burrata. Drinks are also well-served and fresh.",
      rating: 5,
      visitType: "Lunch",
    },
  ];

  const allReviews = lang === "pt" ? ptReviews : enReviews;

  return (
    <section
      id="reviews"
      className="bg-[#E9E4D9] text-[#1A2A1A] pt-32 pb-20 border-t border-[#D1CCBF]"
    >
      <div className="w-full px-[4.5rem] relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <FullLogo
            widthClassName="w-48 md:w-64"
            className="text-[#1A2A1A] mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-8 mb-2 uppercase">
            {lang === "pt" ? "Comentários" : "Reviews"}
          </h1>
          <p className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40">
            Google Reviews • 4.9 ★
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-[#D1CCBF]/20 rounded-[40px] border border-black/5 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#1A2A1A]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-[#1A2A1A]/80 font-serif italic mb-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-sm tracking-widest uppercase mb-1">
                  {review.author}
                </div>
                <div className="flex justify-between items-center opacity-40">
                  <span className="text-[9px] uppercase tracking-widest font-bold">
                    {review.date}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold font-sans italic">
                    {review.visitType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = ({ onOpenReviews }: { onOpenReviews: () => void }) => {
  const lang = useLang();
  const ptReviews = [
    {
      author: "Ricardo Mendes",
      date: "Há 2 meses",
      text: "A melhor pizza que já comi em Portugal. A massa de fermentação lenta é leve e saborosa, e os ingredientes são nitidamente de alta qualidade. O ambiente é muito acolhedor.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Sofia Antunes",
      date: "Há 1 semana",
      text: "Vívono é uma experiência obrigatória em Mafra. A pizza Tartufata é divina! Atendimento impecável e uma carta de vinhos italianos muito bem selecionada.",
      rating: 5,
      visitType: "Almoço em Família",
    },
    {
      author: "João Pereira",
      date: "Há 3 semanas",
      text: "Simplicidade e perfeição. O forno a lenha faz toda a diferença. Recomendo vivamente a burrata de entrada antes da pizza. Cinco estrelas!",
      rating: 5,
      visitType: "Encontro",
    },
    {
      author: "Maria Lourenço",
      date: "Há 1 mês",
      text: "Espaço muito bonito e staff super atencioso. As pizzas artesanais são fantásticas e o Tiramisu é de outro mundo. Recomendo imenso!",
      rating: 5,
      visitType: "Grupo",
    },
    {
      author: "Carlos Silva",
      date: "Há 2 meses",
      text: "Ambiente fantástico e a pizza estava excelente. Os ingredientes notam-se que são frescos. Uma ótima adição a Mafra.",
      rating: 5,
      visitType: "Jantar",
    },
    {
      author: "Ana Beatriz",
      date: "Há 3 meses",
      text: "A verdadeira experiência italiana. O staff é muito simpático e a comida é deliciosa. Voltaremos com certeza!",
      rating: 5,
      visitType: "Almoço",
    },
  ];

  const enReviews = [
    {
      author: "Ricardo Mendes",
      date: "2 months ago",
      text: "The best pizza I've ever had in Portugal. The slow-fermented dough is light and tasty, and the ingredients are clearly of high quality. Very welcoming environment.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Sofia Antunes",
      date: "1 week ago",
      text: "Vívono is a must-stop experience in Mafra. The Tartufata pizza is divine! Impeccable service and a very well-selected Italian wine list.",
      rating: 5,
      visitType: "Family Lunch",
    },
    {
      author: "João Pereira",
      date: "3 weeks ago",
      text: "Simplicity and perfection. The wood-fired oven makes all the difference. I highly recommend the burrata starter before the pizza. Five stars!",
      rating: 5,
      visitType: "Date Night",
    },
    {
      author: "Maria Lourenço",
      date: "1 month ago",
      text: "Very beautiful space and super attentive staff. The artisan pizzas are fantastic and the Tiramisu is from another world. Highly recommend!",
      rating: 5,
      visitType: "Group",
    },
    {
      author: "Carlos Silva",
      date: "2 months ago",
      text: "Fantastic atmosphere and the pizza was excellent. You can tell the ingredients are fresh. A great addition to Mafra.",
      rating: 5,
      visitType: "Dinner",
    },
    {
      author: "Ana Beatriz",
      date: "3 months ago",
      text: "The true Italian experience. The staff is very friendly and the food is delicious. We will definitely be back!",
      rating: 5,
      visitType: "Lunch",
    },
  ];

  const reviews = lang === "pt" ? ptReviews : enReviews;

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-24 bg-[#E9E4D9] border-t border-[#D1CCBF]">
      <div className="w-full px-[4.5rem]">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block text-[#1A2A1A]/40">
            Google Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#1A2A1A]">
            {lang === "pt" ? "O Que Dizem de Nós" : "What They Say About Us"}
          </h2>
        </div>
        <div className="sm:hidden -mx-[4.5rem]">
          <SimpleCarousel
            items={reviews}
            renderItem={(review, index, total) => {
              return (
                <div className="flex flex-col h-full px-0 sm:px-3 lg:px-5">
                  <div
                    className={`p-10 bg-[#D1CCBF]/20 rounded-none sm:rounded-[40px] border-y sm:border border-black/5 flex flex-col h-full text-left`}
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-[#1A2A1A]">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-[#1A2A1A]/80 font-serif italic mb-10 leading-relaxed flex-grow">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <div className="font-bold text-sm tracking-widest uppercase mb-1">
                        {review.author}
                      </div>
                      <div className="flex justify-between items-center opacity-40">
                        <span className="text-[9px] uppercase tracking-widest font-bold">
                          {review.date}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-bold font-sans italic">
                          {review.visitType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 bg-[#D1CCBF]/20 rounded-[40px] border border-black/5 flex flex-col ${
                i >= 4 ? "hidden lg:flex" : ""
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#1A2A1A]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-[#1A2A1A]/80 font-serif italic mb-10 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-sm tracking-widest uppercase mb-1">
                  {review.author}
                </div>
                <div className="flex justify-between items-center opacity-40">
                  <span className="text-[9px] uppercase tracking-widest font-bold">
                    {review.date}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold font-sans italic">
                    {review.visitType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 mb-6 md:mb-6 text-center flex flex-col items-center gap-6">
          <button
            onClick={onOpenReviews}
            className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold opacity-60 hover:opacity-100 transition-opacity underline decoration-dotted font-sans"
          >
            {lang === "pt" ? "Ver Mais Comentários" : "See More Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const lang = useLang();
  return (
    <footer className="py-6 md:pt-8 md:pb-16 bg-[#E9E4D9] text-[#1A2A1A]">
      <div className="w-full px-[4.5rem] text-center flex flex-col items-center">
        <FullLogo
          widthClassName="w-64 md:w-72 lg:w-80"
          className="text-[#1A2A1A] mb-12"
        />

        <p className="text-[#1A2A1A]/70 text-sm leading-relaxed tracking-wide font-serif italic max-w-sm mb-16">
          {lang === "pt"
            ? "Criando momentos culinários essenciais para quem valoriza o detalhe. Excelência a lenha no coração de Mafra, Portugal."
            : "Creating essential culinary moments for those who value detail. Wood-fired excellence in the heart of Mafra, Portugal."}
        </p>

        <div className="flex justify-center items-center pt-12 border-t w-full max-w-lg border-[#D1CCBF] text-[#1A2A1A]/40 text-[9px] uppercase font-bold tracking-[0.3em] font-sans">
          <div className="flex flex-wrap gap-10 justify-center">
            <span>© 2026 Vívono Pizzeria</span>
            <span className="flex items-center gap-2">
              <Globe size={10} /> Português / English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "menu" | "reviews">(
    "home",
  );
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <main className="font-sans antialiased text-[#1A2A1A] bg-[#E9E4D9]">
        <Navbar
          onNavigate={(page) => setCurrentPage(page as any)}
          currentPage={currentPage}
        />
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key={`home-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero onOpenMenu={() => setCurrentPage("menu")} />
              <Features />
              <Craft />
              <Promotions />
              <Reviews onOpenReviews={() => setCurrentPage("reviews")} />
              <InstagramFeed />
              <LocationMap />
              <Footer />
            </motion.div>
          )}
          {currentPage === "menu" && (
            <motion.div
              key={`menu-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <MenuSection />
              <Footer />
            </motion.div>
          )}
          {currentPage === "reviews" && (
            <motion.div
              key={`reviews-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ReviewsSection />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </LanguageContext.Provider>
  );
}
