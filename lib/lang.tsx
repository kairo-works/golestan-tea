"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fa";

type Strings = {
  navCollection: string;
  navBegin: string;
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  heroScroll: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  collectionKicker: string;
  collectionTitle: string;
  collectionSub: string;
  earlName: string;
  earlDesc: string;
  earlChip: string;
  ceylonName: string;
  ceylonDesc: string;
  ceylonChip: string;
  indianName: string;
  indianDesc: string;
  indianChip: string;
  priceNote: string;
  footerTagline: string;
  footerContact: string;
  footerRights: string;
};

const STRINGS: Record<Lang, Strings> = {
  en: {
    navCollection: "The Collection",
    navBegin: "Begin",
    heroKicker: "A Persian ritual — in six scenes",
    heroTitle: "GOLESTAN TEA",
    heroSub: "Loose-leaf tea, blended by hand. Rose, cardamom, cinnamon — poured slowly, the way it should be.",
    heroScroll: "Scroll",
    line1: "A TEABAG FALLS",
    line2: "SIX INGREDIENTS, ONE BURST",
    line3: "HOT WATER, GOLDEN AMBER",
    line4: "POUR. WAIT. BREATHE.",
    collectionKicker: "The Collection",
    collectionTitle: "THREE TEAS. ONE RITUAL.",
    collectionSub:
      "Small batches, blended by hand in Tehran. Each tin holds forty grams — enough for twenty slow cups.",
    earlName: "Earl Grey",
    earlDesc:
      "Black tea, bergamot oil and cornflower petals. Bright, citrus, timeless — the one that started it all.",
    earlChip: "Bergamot · Cornflower",
    ceylonName: "Ceylon Gold",
    ceylonDesc:
      "Single-origin Ceylon black tea. Golden, malty and full-bodied — best taken plain, with nothing in the way.",
    ceylonChip: "Ceylon Leaf · Golden Tip",
    indianName: "Premium Indian",
    indianDesc:
      "Assam black tea with cardamom, cinnamon and clove. Warm, spiced and deep — our house blend for cold evenings.",
    indianChip: "Cardamom · Cinnamon · Clove",
    priceNote: "Prices are approximate",
    footerTagline: "Pour. Wait. Breathe.",
    footerContact: "For orders and wholesale",
    footerRights: "All rights reserved.",
  },
  fa: {
    navCollection: "مجموعه",
    navBegin: "شروع",
    heroKicker: "آیینی ایرانی — در شش صحنه",
    heroTitle: "چای گلستان",
    heroSub: "چای برگی، دست‌ساز و با حوصله ترکیب شده. گل رز، هل، دارچین — آهسته دم می‌شود، همان‌طور که باید.",
    heroScroll: "اسکرول",
    line1: "کیسه چای سقوط می‌کند",
    line2: "شش ماده، یک انفجار",
    line3: "آب داغ، کهربای طلایی",
    line4: "بریز. صبر کن. نفس بکش.",
    collectionKicker: "مجموعه",
    collectionTitle: "سه چای. یک آیین.",
    collectionSub:
      "دسته‌های کوچک، دست‌ساز در تهران. هر قوطی چهل گرم است — برای بیست فنجان آرام کافی است.",
    earlName: "ارل گری",
    earlDesc:
      "چای سیاه، روغن برگاموت و گلبرگ گل گندم. روشن، مرکباتی و جاودانه — همان که همه‌چیز را شروع کرد.",
    earlChip: "برگاموت · گل گندم",
    ceylonName: "سیلان طلایی",
    ceylonDesc:
      "چای سیاه سیلان تک‌منشا. طلایی، مالتی و پرمایه — بهترین حالت آن ساده است، بدون هیچ افزودنی.",
    ceylonChip: "برگ سیلان · نوک طلایی",
    indianName: "هندی ویژه",
    indianDesc:
      "چای سیاه آسام با هل، دارچین و میخک. گرم، ادویه‌دار و عمیق — ترکیب خانگی ما برای عصرهای سرد.",
    indianChip: "هل · دارچین · میخک",
    priceNote: "قیمت‌ها تقریبی است",
    footerTagline: "بریز. صبر کن. نفس بکش.",
    footerContact: "برای سفارش و خرید عمده",
    footerRights: "همه حقوق محفوظ است.",
  },
};

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: STRINGS.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("golestan-lang");
      if (saved === "fa" || saved === "en") setLangState(saved);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("golestan-lang", l);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: STRINGS[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
