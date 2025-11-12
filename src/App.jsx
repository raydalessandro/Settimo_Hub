import React, { useState, useEffect } from 'react';
import { 
  Home, Store, Users, TrendingUp, MapPin, Phone, Mail,
  Heart, X, ChevronRight, Menu, Award, Clock, MessageCircle,
  Search, Coffee, Utensils, Scissors, ShoppingBag, Sparkles,
  CheckCircle2, Zap, Star, Calendar, AlertCircle, Info,
  Navigation, Euro, Target, Lightbulb, History, Compass
} from 'lucide-react';

export default function SettimoHubApp() {
  const [currentSpace, setCurrentSpace] = useState('oggi');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('tutti');
  const [selectedFrazione, setSelectedFrazione] = useState('tutte');
  const [selectedShop, setSelectedShop] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [likedShops, setLikedShops] = useState(new Set());
  const [showPortalAnimation, setShowPortalAnimation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMapModal, setShowMapModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: 'tutti', name: 'Tutti', icon: Store, color: 'from-emerald-600 to-teal-700' },
    { id: 'ristorazione', name: 'Ristorazione', icon: Utensils, color: 'from-orange-600 to-red-700' },
    { id: 'servizi', name: 'Servizi', icon: Scissors, color: 'from-purple-600 to-pink-700' },
    { id: 'retail', name: 'Retail', icon: ShoppingBag, color: 'from-blue-600 to-indigo-700' },
    { id: 'alimentari', name: 'Alimentari', icon: Coffee, color: 'from-amber-600 to-orange-700' }
  ];

  const frazioni = [
    { id: 'tutte', name: 'Tutte le Frazioni' },
    { id: 'centro', name: 'Centro' },
    { id: 'cascine', name: 'Cascine Olona' },
    { id: 'seguro', name: 'Seguro' },
    { id: 'vighignolo', name: 'Vighignolo' },
    { id: 'villaggio', name: 'Villaggio Cavour' }
  ];

  const shops = [
    // ALIMENTARI - 5 negozi
    {
      id: 1,
      name: "Il Forno di Gigi",
      category: "alimentari",
      frazione: "centro",
      tagline: "Dal 1932",
      description: "93 anni di pane fatto come una volta. Focacce, grissini e dolci artigianali. Tradizione familiare.",
      address: "Via Carlo D'Adda, 3",
      phone: "02 335 7890",
      whatsapp: "333 123 4567",
      hours: { open: "07:00", close: "19:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      heritage: true,
      founded: 1932
    },
    {
      id: 2,
      name: "Moroni dal 1913",
      category: "alimentari",
      frazione: "centro",
      tagline: "112 anni di storia",
      description: "Ex Consorzio Agrario. Riso, farine, legumi, prodotti per animali. Storicità assoluta del territorio.",
      address: "Via dei Garibaldini, 27",
      phone: "02 335 2345",
      whatsapp: "333 234 5678",
      hours: { open: "08:30", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
      heritage: true,
      founded: 1913
    },
    {
      id: 3,
      name: "Macelleria Colombo",
      category: "alimentari",
      frazione: "cascine",
      tagline: "Carne di qualità",
      description: "Macelleria tradizionale. Tagli selezionati, salumi artigianali. Consulenza e preparazione.",
      address: "Via Cascine Olona, 45",
      phone: "02 335 3456",
      whatsapp: "333 345 6789",
      hours: { open: "08:00", close: "13:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800"
    },
    {
      id: 4,
      name: "Ortofrutta Mariella",
      category: "alimentari",
      frazione: "vighignolo",
      tagline: "Frutta e verdura fresca",
      description: "Prodotti di stagione a km zero. Frutta, verdura, legumi. Cassette su ordinazione.",
      address: "Via Vighignolo, 23",
      phone: "02 335 4567",
      hours: { open: "07:30", close: "13:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800"
    },
    {
      id: 5,
      name: "Gelateria Gioia",
      category: "alimentari",
      frazione: "centro",
      tagline: "Gelato artigianale",
      description: "Produzione propria giornaliera. Ingredienti naturali, gusti stagionali. Senza coloranti artificiali.",
      address: "Piazza della Repubblica, 8",
      phone: "02 335 5678",
      whatsapp: "333 456 7890",
      hours: { open: "12:00", close: "23:00", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
    },

    // RISTORAZIONE - 8 negozi
    {
      id: 6,
      name: "Osteria delle Rane Rosse",
      category: "ristorazione",
      frazione: "centro",
      tagline: "Cucina milanese dal 1970",
      description: "Trattoria storica. Risotto alla milanese, ossobuco, cotoletta. Materie prime locali, atmosfera familiare.",
      address: "Via Gramsci, 23",
      phone: "02 335 6789",
      whatsapp: "333 567 8901",
      hours: { open: "12:00", close: "22:30", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      heritage: true,
      founded: 1970
    },
    {
      id: 7,
      name: "Chocolat Settimo",
      category: "ristorazione",
      frazione: "centro",
      tagline: "Pasticceria artigianale",
      description: "Dolci artigianali, torte personalizzate, cioccolato di qualità. Laboratorio proprio con vetrina.",
      address: "Via Roma, 15",
      phone: "02 335 7890",
      whatsapp: "333 678 9012",
      hours: { open: "08:00", close: "20:00", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
    },
    {
      id: 8,
      name: "Pizza e Mozzarella",
      category: "ristorazione",
      frazione: "seguro",
      tagline: "Pizzeria napoletana",
      description: "Pizza napoletana STG. Forno a legna, impasto 48h lievitazione. Mozzarella di bufala campana.",
      address: "Via Seguro, 67",
      phone: "02 335 8901",
      whatsapp: "333 789 0123",
      hours: { open: "19:00", close: "23:00", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
    },
    {
      id: 9,
      name: "Bar Centrale",
      category: "ristorazione",
      frazione: "centro",
      tagline: "Il bar di tutti",
      description: "Caffetteria e colazioni. Aperitivi, panini pranzo. Punto di ritrovo del quartiere da 40 anni.",
      address: "Piazza Libertà, 12",
      phone: "02 335 9012",
      hours: { open: "06:30", close: "20:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
    },
    {
      id: 10,
      name: "Ristorante Da Vito",
      category: "ristorazione",
      frazione: "villaggio",
      tagline: "Cucina casalinga",
      description: "Ristorante a gestione familiare. Menù del giorno, cucina italiana tradizionale. Ambiente accogliente.",
      address: "Via Villaggio Cavour, 34",
      phone: "02 335 0123",
      hours: { open: "12:00", close: "15:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
    },
    {
      id: 11,
      name: "Caffè Letterario",
      category: "ristorazione",
      frazione: "centro",
      tagline: "Caffè e cultura",
      description: "Libreria caffè. Colazioni, brunch, aperitivi culturali. Eventi letterari e presentazioni libri.",
      address: "Via Matteotti, 8",
      phone: "02 335 1234",
      hours: { open: "08:00", close: "22:00", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800"
    },
    {
      id: 12,
      name: "Pasticceria Ranieri",
      category: "ristorazione",
      frazione: "cascine",
      tagline: "Dolci tradizionali",
      description: "Pasticceria artigianale. Brioches, paste, torte classiche milanesi. Colazioni e merende.",
      address: "Via Cascine Olona, 12",
      phone: "02 335 2345",
      hours: { open: "07:00", close: "13:30", days: [2,3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800"
    },
    {
      id: 13,
      name: "Osteria del VII Miglio",
      category: "ristorazione",
      frazione: "centro",
      tagline: "Tradizione dal 1970",
      description: "Oltre 50 anni di cucina lombarda. Piatti della tradizione, vini locali. Gestione familiare.",
      address: "Via Gramsci, 1",
      phone: "02 335 3456",
      hours: { open: "12:00", close: "22:00", days: [3,4,5,6,0] },
      verified: true,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      heritage: true,
      founded: 1970
    },

    // SERVIZI ALLA PERSONA - 10 negozi
    {
      id: 14,
      name: "Romano Parrucchieri",
      category: "servizi",
      frazione: "vighignolo",
      tagline: "Stile e tradizione",
      description: "Parrucchiere di fiducia da generazioni. Taglio uomo e donna, trattamenti personalizzati. Consulenza immagine.",
      address: "Via Vighignolo, 45",
      phone: "02 335 4567",
      whatsapp: "333 890 1234",
      hours: { open: "09:00", close: "19:00", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800"
    },
    {
      id: 15,
      name: "Elline Urban Medi Spa",
      category: "servizi",
      frazione: "centro",
      tagline: "Bellezza e benessere",
      description: "Centro estetico completo. Trattamenti viso e corpo, massaggi, epilazione. Prodotti naturali.",
      address: "Via Roma, 45",
      phone: "02 335 5678",
      whatsapp: "333 901 2345",
      hours: { open: "09:30", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
    },
    {
      id: 16,
      name: "Barbiere Vittorio",
      category: "servizi",
      frazione: "centro",
      tagline: "Il barbiere di una volta",
      description: "Barbiere tradizionale. Taglio classico, rasatura col rasoio, rifinitura barba. Atmosfera d'altri tempi.",
      address: "Via Matteotti, 23",
      phone: "02 335 6789",
      hours: { open: "08:30", close: "12:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800"
    },
    {
      id: 17,
      name: "Centro Benessere Harmony",
      category: "servizi",
      frazione: "cascine",
      tagline: "Massaggi e relax",
      description: "Centro massaggi specializzato. Massoterapia, riflessologia plantare, trattamenti olistici.",
      address: "Via Cascine Olona, 89",
      phone: "02 335 7890",
      whatsapp: "333 012 3456",
      hours: { open: "10:00", close: "20:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
    },
    {
      id: 18,
      name: "Nails & Beauty",
      category: "servizi",
      frazione: "seguro",
      tagline: "Manicure e pedicure",
      description: "Centro unghie specializzato. Ricostruzione, semipermanente, nail art. Pedicure estetico.",
      address: "Via Seguro, 34",
      phone: "02 335 8901",
      hours: { open: "09:00", close: "19:00", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
    },
    {
      id: 19,
      name: "Carlo Corsi Tattoo",
      category: "servizi",
      frazione: "centro",
      tagline: "Tatuaggi custom",
      description: "Studio tatuaggi. Disegni personalizzati, cover-up, microblading. Igiene certificata, ambiente professionale.",
      address: "Via Di Vittorio, 12",
      phone: "02 335 9012",
      whatsapp: "333 123 4567",
      hours: { open: "14:00", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800"
    },
    {
      id: 20,
      name: "Palestra FitZone",
      category: "servizi",
      frazione: "villaggio",
      tagline: "Fitness e salute",
      description: "Palestra di quartiere. Sala pesi, corsi fitness, personal trainer. Atmosfera familiare e motivante.",
      address: "Via Villaggio Cavour, 56",
      phone: "02 335 0123",
      hours: { open: "07:00", close: "22:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
    },
    {
      id: 21,
      name: "Salone Glamour",
      category: "servizi",
      frazione: "centro",
      tagline: "Parrucchiere donna",
      description: "Parrucchiere specializzato donna. Colore, piega, trattamenti ristrutturanti. Extension e consulenza.",
      address: "Piazza Repubblica, 5",
      phone: "02 335 1234",
      whatsapp: "333 234 5678",
      hours: { open: "09:00", close: "18:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800"
    },
    {
      id: 22,
      name: "Centro Yoga Sattva",
      category: "servizi",
      frazione: "seguro",
      tagline: "Yoga e meditazione",
      description: "Centro yoga. Corsi per tutti i livelli, meditazione guidata, pilates. Insegnanti certificati.",
      address: "Via Seguro, 78",
      phone: "02 335 2345",
      hours: { open: "08:00", close: "21:00", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800"
    },
    {
      id: 23,
      name: "Studio Podologico Benessere",
      category: "servizi",
      frazione: "centro",
      tagline: "Cura del piede",
      description: "Podologo specializzato. Trattamenti piede, callosità, unghie incarnite. Plantari su misura.",
      address: "Via Matteotti, 67",
      phone: "02 335 3456",
      hours: { open: "09:00", close: "18:00", days: [1,2,3,4,5] },
      verified: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    },

    // RETAIL - 7 negozi
    {
      id: 24,
      name: "Sbarbori Gioielli",
      category: "retail",
      frazione: "centro",
      tagline: "3 generazioni di orafi",
      description: "Oltre 50 anni di oreficeria. Laboratorio proprio, creazioni artigianali, riparazioni. Gioielli su misura.",
      address: "Via Giuseppe Di Vittorio, 2",
      phone: "02 335 4567",
      whatsapp: "333 345 6789",
      hours: { open: "09:30", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      heritage: true,
      founded: 1970
    },
    {
      id: 25,
      name: "Ferramenta Magrefer",
      category: "retail",
      frazione: "cascine",
      tagline: "Tutto per la casa",
      description: "Ferramenta completa. Utensileria, casalinghi, giardinaggio, ferramenta edile. Consulenza gratuita.",
      address: "Via Cascine Olona, 78",
      phone: "02 335 5678",
      whatsapp: "333 456 7890",
      hours: { open: "08:30", close: "19:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800"
    },
    {
      id: 26,
      name: "Boutique Margherita",
      category: "retail",
      frazione: "centro",
      tagline: "Abbigliamento donna",
      description: "Boutique abbigliamento donna. Selezione italiana, consulenza personalizzata. Taglie dalla 40 alla 52.",
      address: "Via Roma, 34",
      phone: "02 335 6789",
      hours: { open: "09:30", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
    },
    {
      id: 27,
      name: "Libreria Il Punto",
      category: "retail",
      frazione: "centro",
      tagline: "Libri e cultura",
      description: "Libreria indipendente. Narrativa, saggistica, libri per ragazzi. Ordinazioni e consigli personalizzati.",
      address: "Piazza Libertà, 7",
      phone: "02 335 7890",
      hours: { open: "09:00", close: "19:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800"
    },
    {
      id: 28,
      name: "Ottica Bollani",
      category: "retail",
      frazione: "centro",
      tagline: "Bottega storica dal 1972",
      description: "Ottica storica. Optometrista specializzato, lenti progressive, montature selezionate. Laboratorio interno.",
      address: "Viale Teodorico, 19",
      phone: "02 347466",
      whatsapp: "345 832 3121",
      hours: { open: "09:15", close: "19:30", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800",
      heritage: true,
      founded: 1972
    },
    {
      id: 29,
      name: "Cartoleria Fantasia",
      category: "retail",
      frazione: "vighignolo",
      tagline: "Scuola e ufficio",
      description: "Cartoleria completa. Materiale scolastico, articoli ufficio, bomboniere. Fotocopie e plastificazioni.",
      address: "Via Vighignolo, 12",
      phone: "02 335 8901",
      hours: { open: "08:30", close: "12:30", days: [1,2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800"
    },
    {
      id: 30,
      name: "Pet Shop Zampa Felice",
      category: "retail",
      frazione: "seguro",
      tagline: "Tutto per animali",
      description: "Negozio animali. Cibo, accessori, toelettatura. Consigli nutrizionali per cani e gatti.",
      address: "Via Seguro, 45",
      phone: "02 335 9012",
      hours: { open: "09:00", close: "19:00", days: [2,3,4,5,6] },
      verified: true,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800"
    }
  ];

  const isShopOpen = (shop) => {
    const now = currentTime;
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;

    if (!shop.hours || !shop.hours.days.includes(currentDay)) return false;

    const [openHour, openMin] = shop.hours.open.split(':').map(Number);
    const [closeHour, closeMin] = shop.hours.close.split(':').map(Number);
    const openTimeMinutes = openHour * 60 + openMin;
    const closeTimeMinutes = closeHour * 60 + closeMin;

    return currentTimeMinutes >= openTimeMinutes && currentTimeMinutes <= closeTimeMinutes;
  };

  const getClosingSoon = (shop) => {
    const now = currentTime;
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;

    if (!shop.hours || !shop.hours.days.includes(currentDay)) return false;

    const [closeHour, closeMin] = shop.hours.close.split(':').map(Number);
    const closeTimeMinutes = closeHour * 60 + closeMin;
    const minutesUntilClose = closeTimeMinutes - currentTimeMinutes;

    return minutesUntilClose > 0 && minutesUntilClose <= 60;
  };

  const SettimoLogo = ({ size = 'md', theme = 'light' }) => {
    const sizeClasses = { sm: 'text-sm', md: 'text-lg', lg: 'text-3xl' };
    const iconSizes = { sm: 'w-6 h-6', md: 'w-9 h-9', lg: 'w-14 h-14' };
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const accentColor = theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600';
    
    return (
      <div className="flex items-center gap-2">
        <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L12 8M12 8C12 8 8 6 8 10C8 14 12 16 12 16M12 8C12 8 16 6 16 10C16 14 12 16 12 16M12 16L12 22" 
                stroke={theme === 'dark' ? '#6ee7b7' : '#059669'} 
                strokeWidth="2" 
                strokeLinecap="round"/>
        </svg>
        <div className="flex flex-col leading-none">
          <span className={'text-[10px] tracking-wide font-semibold ' + accentColor}>SETTIMO</span>
          <span className={sizeClasses[size] + ' font-black tracking-tight ' + textColor + ' -mt-px'}>HUB</span>
          {size !== 'sm' && <div className={'text-[9px] tracking-wider font-bold mt-px ' + accentColor + '/80'}>il quartiere in un'app</div>}
        </div>
      </div>
    );
  };

  const openShops = shops.filter(isShopOpen);
  const closingSoon = shops.filter(shop => isShopOpen(shop) && getClosingSoon(shop));
  
  const filteredShops = shops.filter(shop => {
    const matchCategory = selectedCategory === 'tutti' || shop.category === selectedCategory;
    const matchFrazione = selectedFrazione === 'tutte' || shop.frazione === selectedFrazione;
    const matchSearch = searchQuery === '' || 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchFrazione && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <button onClick={() => setShowMenu(true)} className="p-1.5 -ml-1.5 hover:bg-gray-100 rounded-lg">
            <Menu className="w-4.5 h-4.5 text-gray-700" />
          </button>
          <SettimoLogo size="sm" />
          <div className="w-7"></div>
        </div>
      </header>

      {showMenu && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowMenu(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <SettimoLogo size="md" />
                <button onClick={() => setShowMenu(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <p className="text-xs text-gray-600">Il tuo quartiere vero. Zero catene, solo persone.</p>
            </div>
            
            <div className="p-4">
              <div className="space-y-1">
                <button onClick={() => { setActiveSection('impatto'); setShowMenu(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 text-left">
                  <Euro className="w-4.5 h-4.5 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-900">Impatto Economico</span>
                </button>
                <button onClick={() => { setActiveSection('mappa'); setShowMenu(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-amber-50 text-left">
                  <MapPin className="w-4.5 h-4.5 text-amber-600" />
                  <span className="text-sm font-semibold text-gray-900">Mappa Negozi</span>
                </button>
                <button onClick={() => { setActiveSection('territorio'); setShowMenu(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-left">
                  <Compass className="w-4.5 h-4.5 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">Settimo e Frazioni</span>
                </button>
                <button onClick={() => { setActiveSection('progetto'); setShowMenu(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-purple-50 text-left">
                  <Info className="w-4.5 h-4.5 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-900">Il Progetto</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-12 pb-24">
        {currentSpace === 'oggi' ? (
          <>
            {activeSection === 'home' && (
              <div>
                <div className="relative h-56 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-center items-center text-white px-5 text-center">
                    <Zap className="w-12 h-12 mb-3" strokeWidth={2.5} />
                    <h2 className="text-2xl font-black tracking-tight mb-2">Aperto Adesso</h2>
                    <p className="text-xs opacity-90 max-w-xs">
                      {openShops.length} negozi aperti in questo momento
                    </p>
                  </div>
                </div>

                {closingSoon.length > 0 && (
                  <div className="px-3 py-3 bg-amber-50 border-b border-amber-100">
                    <div className="flex items-center gap-1.5 mb-2">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wide">Chiude tra poco</h3>
                    </div>
                    <div className="space-y-2">
                      {closingSoon.slice(0, 3).map(shop => (
                        <button key={shop.id} onClick={() => setSelectedShop(shop)}
                          className="w-full bg-white rounded-lg p-2.5 shadow-sm border border-amber-200 hover:shadow-md transition-all text-left">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-bold text-xs text-gray-900">{shop.name}</h4>
                              <p className="text-[10px] text-amber-600 font-semibold">Chiude alle {shop.hours.close}</p>
                            </div>
                            <Clock className="w-4 h-4 text-amber-600" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="px-3 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-0.5 bg-emerald-600"></div>
                      <h2 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        Aperti Ora ({openShops.length})
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    {openShops.map(shop => (
                      <button key={shop.id} onClick={() => setSelectedShop(shop)}
                        className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all text-left">
                        <div className="flex gap-3 p-3">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                            <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xs text-gray-900 mb-0.5">{shop.name}</h3>
                            <p className="text-[10px] text-emerald-600 font-semibold mb-1">{shop.tagline}</p>
                            <div className="flex items-center gap-2 text-[9px] text-gray-500">
                              <span className="capitalize">{shop.frazione}</span>
                              <span>•</span>
                              <span>Chiude {shop.hours.close}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {activeSection === 'home' && (
              <div>
                <div className="relative h-72 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-center items-center text-white px-5 text-center">
                    <SettimoLogo size="lg" theme="dark" />
                    <div className="mt-5">
                      <p className="text-xs opacity-90 max-w-xs leading-snug">
                        {shops.length} negozi locali • {frazioni.length - 1} frazioni • Zero catene
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 pt-3 pb-2 bg-white border-b border-gray-100 sticky top-12 z-30">
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Cerca negozi..." value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => {
                      const Icon = cat.icon;
                      const count = shops.filter(s => cat.id === 'tutti' || s.category === cat.id).length;
                      return (
                        <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                          className={'flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold ' +
                            (selectedCategory === cat.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-600')}>
                          <Icon className="w-3.5 h-3.5" />
                          <span>{cat.name}</span>
                          <span className={selectedCategory === cat.id ? 'opacity-80' : 'opacity-60'}>({count})</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 overflow-x-auto pt-2 scrollbar-hide">
                    {frazioni.map(fraz => {
                      const isActive = selectedFrazione === fraz.id;
                      return (
                        <button key={fraz.id} onClick={() => setSelectedFrazione(fraz.id)}
                          className={'flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-bold ' +
                            (isActive ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-white text-gray-600 border border-gray-200')}>
                          {fraz.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="px-3 py-4">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-0.5 bg-emerald-600"></div>
                      <h2 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        {filteredShops.length} Negozi
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    {filteredShops.map(shop => (
                      <button key={shop.id} onClick={() => setSelectedShop(shop)}
                        className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all text-left">
                        <div className="flex gap-3 p-3">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                            {isShopOpen(shop) && (
                              <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <div className="flex-1">
                                <h3 className="font-bold text-xs text-gray-900 leading-tight mb-0.5">{shop.name}</h3>
                                <p className="text-[10px] text-emerald-600 font-semibold mb-1">{shop.tagline}</p>
                              </div>
                              {shop.verified && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 ml-2" />
                              )}
                            </div>
                            <p className="text-[10px] text-gray-600 leading-snug line-clamp-2 mb-1.5">{shop.description}</p>
                            <div className="flex items-center gap-2 text-[9px] text-gray-500">
                              <span className="capitalize">{shop.frazione}</span>
                              {shop.heritage && (
                                <>
                                  <span>•</span>
                                  <div className="flex items-center gap-0.5 text-amber-600">
                                    <Award className="w-3 h-3" />
                                    <span>Dal {shop.founded}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'impatto' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-emerald-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Impatto Economico</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Stime sul valore del commercio locale</p>
                </div>

                <div className="px-3 py-4 space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-3 text-gray-900">💰 Dove vanno i tuoi €100?</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-gray-900">Catene Nazionali</span>
                          <span className="text-xs font-bold text-red-600">~€43</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{width: '43%'}}></div>
                        </div>
                        <p className="text-[9px] text-gray-600 mt-1">Stima: circa €43 restano nel territorio locale</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-gray-900">Negozi Locali</span>
                          <span className="text-xs font-bold text-emerald-600">~€68</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{width: '68%'}}></div>
                        </div>
                        <p className="text-[9px] text-gray-600 mt-1">Stima: circa €68 restano nel territorio locale</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <p className="text-[10px] text-emerald-900 font-semibold leading-snug">
                        📊 Differenza stimata: <strong>+58%</strong> di valore che resta a Settimo
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-3 text-gray-900">🧮 Simulazione</h3>
                    <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                      Se <strong>1.000 persone</strong> spendono <strong>€50 al mese</strong> in negozi locali invece che in catene:
                    </p>

                    <div className="space-y-2.5">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-[10px] text-gray-600 mb-1">Nelle catene (stima €43 su €100)</div>
                        <div className="text-lg font-black text-red-600">€21.500/mese</div>
                        <div className="text-[9px] text-gray-500">rimangono nel territorio</div>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="text-[10px] text-emerald-700 mb-1">Nei negozi locali (stima €68 su €100)</div>
                        <div className="text-lg font-black text-emerald-600">€34.000/mese</div>
                        <div className="text-[9px] text-emerald-700">rimangono nel territorio</div>
                      </div>

                      <div className="flex items-center justify-center py-2">
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Differenza stimata</div>
                          <div className="text-2xl font-black text-emerald-600">+€12.500</div>
                          <div className="text-[9px] text-gray-600">al mese nel quartiere</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-4 text-white">
                    <div className="text-3xl mb-2">💭</div>
                    <p className="text-xs italic leading-relaxed mb-2">
                      "Ogni volta che compri qualcosa, stai votando per il tipo di mondo in cui vuoi vivere."
                    </p>
                    <p className="text-[9px] opacity-80 font-semibold">– Anna Lappé</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xs mb-2 text-gray-900">⚠️ Nota Metodologica</h3>
                    <p className="text-[10px] text-gray-600 leading-relaxed">
                      I dati presentati sono <strong>stime indicative</strong> basate su studi economici (es. Civic Economics, American Independent Business Alliance). 
                      I valori effettivi possono variare in base a molti fattori locali. L'obiettivo è illustrare l'ordine di grandezza dell'impatto economico locale.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'mappa' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-amber-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Mappa Negozi</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Tutti i {shops.length} negozi di Settimo Milanese</p>
                </div>

                <div className="px-3 py-4 space-y-3">
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <h3 className="font-bold text-xs text-amber-900">Vista Interattiva</h3>
                    </div>
                    <p className="text-[10px] text-amber-800 leading-snug mb-3">
                      Visualizza tutti i {shops.length} negozi sulla mappa di Settimo Milanese
                    </p>
                    <button
                      onClick={() => setShowMapModal(true)}
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2.5 rounded-lg font-bold text-xs uppercase hover:from-amber-700 hover:to-orange-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Apri Mappa Interattiva
                    </button>
                  </div>

                  {/* LEGENDA CATEGORIE */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xs mb-2 text-gray-900">Legenda</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.filter(c => c.id !== 'tutti').map(cat => {
                        const Icon = cat.icon;
                        const count = shops.filter(s => s.category === cat.id).length;
                        return (
                          <div key={cat.id} className="flex items-center gap-2">
                            <div className={'w-6 h-6 rounded-lg bg-gradient-to-br ' + cat.color + ' flex items-center justify-center flex-shrink-0'}>
                              <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-gray-900">{cat.name}</div>
                              <div className="text-[9px] text-gray-500">{count} negozi</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SEZIONE STORICI COME HIGHLIGHT */}
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5" />
                      <h3 className="font-bold text-sm">Negozi Storici</h3>
                    </div>
                    <p className="text-xs opacity-95 mb-3 leading-snug">
                      {shops.filter(s => s.heritage).length} attività con oltre 50 anni di storia
                    </p>
                    <div className="space-y-2">
                      {shops.filter(s => s.heritage).sort((a, b) => a.founded - b.founded).map(shop => (
                        <button
                          key={shop.id}
                          onClick={() => setSelectedShop(shop)}
                          className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg p-2 text-left transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-xs">{shop.name}</div>
                              <div className="text-[10px] opacity-90">Dal {shop.founded} • {new Date().getFullYear() - shop.founded} anni</div>
                            </div>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* LISTA PER FRAZIONE */}
                  {frazioni.filter(f => f.id !== 'tutte').map(fraz => {
                    const frazioneShops = shops.filter(s => s.frazione === fraz.id);
                    if (frazioneShops.length === 0) return null;
                    
                    return (
                      <div key={fraz.id} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-xs text-gray-900">{fraz.name}</h3>
                          <span className="text-[10px] text-gray-500 font-semibold">{frazioneShops.length} negozi</span>
                        </div>
                        <div className="space-y-1.5">
                          {frazioneShops.slice(0, 3).map(shop => (
                            <button
                              key={shop.id}
                              onClick={() => setSelectedShop(shop)}
                              className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span className="text-xs text-gray-900 font-medium">{shop.name}</span>
                              </div>
                            </button>
                          ))}
                          {frazioneShops.length > 3 && (
                            <button
                              onClick={() => {
                                setSelectedFrazione(fraz.id);
                                setActiveSection('home');
                              }}
                              className="w-full text-left p-2 text-xs text-emerald-600 font-bold hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                              Vedi tutti ({frazioneShops.length})
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeSection === 'territorio' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-blue-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Settimo Milanese</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Storia e territorio</p>
                </div>

                <div className="px-3 py-4 space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-2 text-gray-900">🏛️ Il Comune</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Settimo Milanese è un comune dell'area metropolitana di Milano. 
                      Nome derivato dalla distanza di 7 miglia romane (circa 10 km) da Milano. 
                      Territorio caratterizzato da storia agricola e forte identità locale.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-3 text-gray-900">🏘️ Le 5 Frazioni</h3>
                    <div className="space-y-2">
                      {frazioni.filter(f => f.id !== 'tutte').map(fraz => (
                        <div key={fraz.id} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                          <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-bold text-xs text-gray-900">{fraz.name}</div>
                            <div className="text-[10px] text-gray-600">
                              {shops.filter(s => s.frazione === fraz.id).length} negozi mappati
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4 text-white">
                    <h3 className="font-bold text-sm mb-2">🌱 Perché Questo Progetto</h3>
                    <p className="text-xs leading-relaxed opacity-95">
                      Settimo Hub nasce per <strong>combattere l'omologazione</strong> delle catene nazionali. 
                      Vogliamo che ogni frazione mantenga la propria identità, che i negozi storici sopravvivano, 
                      che i soldi restino nel territorio. <strong>Ogni acquisto locale è un voto per l'autenticità.</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'progetto' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-purple-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Il Progetto</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Chi siamo e perché esistiamo</p>
                </div>

                <div className="px-3 py-4 space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-2 text-gray-900">🎯 La Missione</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Settimo Hub è un <strong>progetto civico locale</strong> per valorizzare il commercio indipendente. 
                      Non siamo un'agenzia marketing. Non cerchiamo investitori. 
                      Siamo abitanti di Settimo che vogliono preservare l'identità del territorio.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-2 text-gray-900">💡 Come Funziona</h3>
                    <p className="text-xs text-gray-700 leading-relaxed mb-2">
                      Mappiamo <strong>solo negozi locali indipendenti</strong>. Zero catene. Zero franchising. 
                      I commercianti hanno una scheda base gratuita. Chi vuole maggiore visibilità può scegliere piani a pagamento.
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Per i cittadini l'app è <strong>sempre gratuita</strong>. Nessuna pubblicità. Nessun tracking invasivo.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-sm mb-3 text-gray-900">📞 Contatti</h3>
                    <div className="space-y-2">
                      <a href="mailto:info@settimo-hub.it" 
                        className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-gray-900 font-semibold">info@settimo-hub.it</span>
                      </a>
                      <a href="tel:0233312345" 
                        className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-gray-900 font-semibold">02 3331 2345</span>
                      </a>
                      <a href="https://wa.me/393331234567" 
                        className="flex items-center gap-2.5 p-2.5 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs text-emerald-900 font-semibold">WhatsApp: 333 123 4567</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <h3 className="font-bold text-xs mb-2 text-purple-900">🤝 Vuoi Contribuire?</h3>
                    <p className="text-[11px] text-purple-800 leading-relaxed">
                      Conosci un negozio che non è ancora mappato? Segnalacelo. 
                      Hai suggerimenti per migliorare l'app? Scrivici. 
                      <strong>Settimo Hub è di tutti noi.</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 z-40">
        <div className="flex justify-around items-center py-2">
          {currentSpace === 'oggi' ? (
            <>
              <button onClick={() => setActiveSection('home')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + 
                  (activeSection === 'home' ? 'text-orange-600' : 'text-gray-400')}>
                <Zap className="w-4.5 h-4.5" strokeWidth={activeSection === 'home' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Ora</span>
              </button>
              
              <button className="flex flex-col items-center gap-0.5 p-1.5 text-gray-400">
                <Calendar className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold uppercase tracking-wide">Eventi</span>
              </button>
              
              <div className="w-14"></div>
              
              <button className="flex flex-col items-center gap-0.5 p-1.5 text-gray-400">
                <Sparkles className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold uppercase tracking-wide">Offerte</span>
              </button>
              
              <button className="flex flex-col items-center gap-0.5 p-1.5 text-gray-400">
                <AlertCircle className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold uppercase tracking-wide">Urgenze</span>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setActiveSection('home')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + 
                  (activeSection === 'home' ? 'text-emerald-600' : 'text-gray-400')}>
                <Store className="w-4.5 h-4.5" strokeWidth={activeSection === 'home' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Negozi</span>
              </button>
              
              <button onClick={() => setActiveSection('mappa')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + 
                  (activeSection === 'mappa' ? 'text-emerald-600' : 'text-gray-400')}>
                <MapPin className="w-4.5 h-4.5" strokeWidth={activeSection === 'mappa' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Mappa</span>
              </button>
              
              <div className="w-14"></div>
              
              <button onClick={() => setActiveSection('impatto')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + 
                  (activeSection === 'impatto' ? 'text-emerald-600' : 'text-gray-400')}>
                <Euro className="w-4.5 h-4.5" strokeWidth={activeSection === 'impatto' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Impatto</span>
              </button>
              
              <button onClick={() => setActiveSection('territorio')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + 
                  (activeSection === 'territorio' ? 'text-emerald-600' : 'text-gray-400')}>
                <Compass className="w-4.5 h-4.5" strokeWidth={activeSection === 'territorio' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Info</span>
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="relative h-20 flex items-start justify-center">
          <button onClick={() => {
              setShowPortalAnimation(true);
              setTimeout(() => {
                setCurrentSpace(prev => prev === 'oggi' ? 'esplora' : 'oggi');
                setActiveSection('home');
                setShowPortalAnimation(false);
              }, 400);
            }}
            className={'pointer-events-auto w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all ' + 
              (currentSpace === 'oggi' 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                : 'bg-gradient-to-br from-orange-500 to-red-600')}>
            {currentSpace === 'oggi' ? (
              <Search className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Zap className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {showPortalAnimation && (
        <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white z-50 flex items-center justify-center">
          <div className="animate-pulse">
            <SettimoLogo size="lg" />
          </div>
        </div>
      )}

      {showMapModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <h2 className="font-bold text-sm text-gray-900">Mappa Negozi</h2>
              </div>
              <button onClick={() => setShowMapModal(false)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 mb-4">
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>🗺️ Mappa Interattiva:</strong> Questa funzionalità mostra tutti i {shops.length} negozi 
                  di Settimo Milanese su una mappa geografica. Nella versione completa potrai cliccare 
                  sui marker per vedere i dettagli di ogni attività.
                </p>
              </div>

              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative border-2 border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-bold text-sm text-gray-900 mb-2">Mappa in Caricamento</h3>
                    <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                      In questa demo, la mappa interattiva verrebbe caricata qui con tutti i marker dei negozi.
                      Per vedere una demo funzionante, usa il tool map_display_v0 esternamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg font-black text-emerald-600">{shops.length}</div>
                  <div className="text-[10px] text-gray-600 font-semibold">Negozi Mappati</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg font-black text-amber-600">{shops.filter(s => s.heritage).length}</div>
                  <div className="text-[10px] text-gray-600 font-semibold">Storici</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="font-bold text-xs text-gray-900 mb-2">Negozi sulla Mappa:</h3>
                {shops.slice(0, 10).map(shop => (
                  <button
                    key={shop.id}
                    onClick={() => {
                      setShowMapModal(false);
                      setSelectedShop(shop);
                    }}
                    className="w-full bg-white rounded-lg p-2.5 border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-left"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs text-gray-900 truncate">{shop.name}</div>
                        <div className="text-[10px] text-gray-600 capitalize">{shop.frazione}</div>
                      </div>
                      {shop.heritage && <Award className="w-3.5 h-3.5 text-amber-500" />}
                    </div>
                  </button>
                ))}
                {shops.length > 10 && (
                  <div className="text-center pt-2">
                    <span className="text-xs text-gray-500 font-semibold">+ altri {shops.length - 10} negozi</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedShop && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
              <h2 className="font-bold text-sm text-gray-900">Dettagli Negozio</h2>
              <button onClick={() => setSelectedShop(null)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="pb-6">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img src={selectedShop.image} alt={selectedShop.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {selectedShop.verified && (
                    <div className="bg-emerald-500 text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verificato
                    </div>
                  )}
                  {isShopOpen(selectedShop) && (
                    <div className="bg-orange-500 text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Aperto
                    </div>
                  )}
                </div>
                {selectedShop.heritage && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Dal {selectedShop.founded}
                  </div>
                )}
              </div>

              <div className="px-4 py-4 border-b border-gray-100">
                <h3 className="font-black text-xl text-gray-900 mb-1">{selectedShop.name}</h3>
                <p className="text-sm text-emerald-600 font-bold mb-2">{selectedShop.tagline}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{selectedShop.description}</p>
              </div>

              <div className="px-4 py-4 space-y-2">
                {selectedShop.whatsapp && (
                  <a href={'https://wa.me/39' + selectedShop.whatsapp.replace(/\s/g, '')}
                    className="flex items-center justify-between bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all">
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-bold text-sm">Contatta su WhatsApp</span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                )}

                <a href={'tel:' + selectedShop.phone.replace(/\s/g, '')}
                  className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4.5 h-4.5 text-gray-700" />
                    <span className="font-bold text-sm text-gray-900">{selectedShop.phone}</span>
                  </div>
                  <ChevronRight className="w-4.5 h-4.5 text-gray-400" />
                </a>
              </div>

              <div className="px-4 py-3 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wide mb-0.5">Indirizzo</div>
                    <div className="text-sm font-semibold text-gray-900">{selectedShop.address}</div>
                    <button className="text-xs text-emerald-600 font-bold mt-1 hover:text-emerald-700 flex items-center gap-1">
                      <Navigation className="w-3 h-3" />
                      Apri in Maps
                    </button>
                  </div>
                </div>

                {selectedShop.hours && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wide mb-0.5">Orari</div>
                      <div className="text-sm font-semibold text-gray-900">
                        {selectedShop.hours.open} - {selectedShop.hours.close}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {selectedShop.hours.days.map(d => ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][d]).join(', ')}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Store className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wide mb-0.5">Categoria</div>
                    <div className="text-sm font-semibold text-gray-900 capitalize">
                      {categories.find(c => c.id === selectedShop.category)?.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wide mb-0.5">Frazione</div>
                    <div className="text-sm font-semibold text-gray-900 capitalize">{selectedShop.frazione}</div>
                  </div>
                </div>
              </div>

              <div className="px-4 pt-2 pb-4">
                <button onClick={() => {
                    const newLikes = new Set(likedShops);
                    if (newLikes.has(selectedShop.id)) {
                      newLikes.delete(selectedShop.id);
                    } else {
                      newLikes.add(selectedShop.id);
                    }
                    setLikedShops(newLikes);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                  <Heart className={likedShops.has(selectedShop.id) ? 'w-5 h-5 fill-emerald-600 text-emerald-600' : 'w-5 h-5 text-gray-400'} />
                  <span className="font-bold text-sm text-gray-900">
                    {likedShops.has(selectedShop.id) ? 'Salvato' : 'Salva nei preferiti'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
