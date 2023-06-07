import { useState, useCallback, useEffect } from 'react';
import {
  Page, Layout, Card, List, Link, TextContainer, ButtonGroup, Button, Stack, Badge, Grid, Collapsible,
  Icon, FormLayout, TextField, RadioButton, ChoiceList, Select, OptionList, DropZone, Thumbnail, DataTable, Modal, VideoThumbnail, MediaCard
} from "@shopify/polaris";
import '../style.css'
import blckdiamond from '../assets/20180403_template_dark_sharp_edges.png';
import amazonian from '../assets/20180403_template_dust.png';
import nikki from '../assets/20180403_template_seigaiha.png';
import giftspark from '../assets/20180403_template_memphis-colorful.png';
import itsnewday from '../assets/20180403_template_halftone-yellow.png';
import fullspring from '../assets/20180403_template_congruent_pentagon.png';
import summerwave from '../assets/20180403_template_waves.png';
import rosemakeup from '../assets/20180403_template_acrylic.png';
import classicxmas from '../assets/20180403_template_christmas.png';
import christmas from '../assets/20180403_template_christmas.png';
import xmas from '../assets/xmas_box.png'
import sales from '../assets/20170209_sales_03.png'
import blackfriday from '../assets/20170926_blackfriday_text.png'
import cybermonday from '../assets/20170926_cybermonday_text.png'
import sakura from '../assets/20180403_sakura.png'
import acrylic from '../assets/20180403_template_acrylic.png'
import colorful from '../assets/20180403_template_memphis-colorful.png'
import hat from '../assets/20161219_xmas_hat.png'
import candybar from '../assets/20161219_xmas_candybar.png'
import valentines_02 from '../assets/20171028_valentines_02.png'
import valentines_04 from '../assets/20171028_valentines_04.png'
import seigaiha from '../assets/20180403_template_seigaiha.png'
import herb from '../assets/20180403_herb.png'
import stpatrick_01 from '../assets/20170209_stpatrick_01.png'
import congruent_pentagon from '../assets/20180403_template_congruent_pentagon.png'
import halftone_yellow from '../assets/20180403_template_halftone-yellow.png'
import newyear_beer from '../assets/20161219_newyear_beer.png'
import newyear_fireworks from '../assets/20161219_newyear_fireworks.png'
import waves from '../assets/20180403_template_waves.png'
import dust from '../assets/20180403_template_dust.png'
import dark_sharp_edges from '../assets/20180403_template_dark_sharp_edges.png'
import halloween02 from '../assets/halloween02.png'
import ghost from '../assets/20170923_halloween_ghost.png'
import new_year from '../assets/fit_new_year.jpg'
import fit_lunar from '../assets/fit_lunar.jpg'
import fit_valentine from '../assets/fit-valentine.jpg'
import fit_halloween from '../assets/fit_halloween.jpg'
import thanks_giving from '../assets/fit_thanks_giving.jpg'
import black_friday from '../assets/fit_black_friday.jpg'
import cyber_monday from '../assets/fit_cyber_monday.jpg'
import fit_christmas from '../assets/fit_christmas.jpg'
import vimotia_shopify from '../assets/vimotia-shopify-banner.jpg'
import tms_shopify from '../assets/tms-shopify-banner.jpg'
import bie_shopify from '../assets/bie-shopify-banner.jpg'
import bpe_shopify from '../assets/bpe-shopify-banner.jpg'
import maxresdefault from '../assets/maxresdefault.jpg'
import { ChevronDownMinor, LockMajor, PlayCircleMajor, NoteMinor } from '@shopify/polaris-icons';
import axios from 'axios';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function index() {

  const [basictemplate, setBasicTemplate] = useState(0);
  const [showContent, setShowContent] = useState(0);
  const [showGradientColorImage, setshowGradientColorImage] = useState(0);
  const [showPatternImage, setshowPatternImage] = useState(0);
  const [showFittedImage, setshowFittedImage] = useState(0);
  const [showData, setShowData] = useState([]);
  const [products, setProducts] = useState([]);
  const [exludegeotarget, setexludegeotarget] = useState("");
  const [geoLocationTarget, setgeoLocationTarget] = useState("");
  const [btnBG, setBtnBG] = useState('NoImage')
  const [backgroundColor, setBackgroundColor] = useState("#1E1E20");
  const [backgroundimage, setBackgroundImage] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [textColor, setTextColor] = useState("#F2CA80");
  const [specialTextColor, setSpecialTextColor] = useState("#F2CA80");
  const [currencyData, setCurrencyData] = useState([]);
  const [selectedFontFamily, setSelectedFontFamily] = useState("sans");
  const [selectedFontSize, setSelectedFontSize] = useState(16);
  const [barPadding, setBarPadding] = useState(10);
  const [selectedImage, setSelectedImage] = useState(null);
  const [disappearAfter, setDisappearAfter] = useState(0);
  const [delayBefore, setDelayBefore] = useState(0);
  const [time, setTime] = useState(0);
  const [selectcurrency, setSelectcurrency] = useState('');
  const [selectcurrencysymbolposition, setSelectCurrencySymbolPosition] = useState("0");
  const [displayPageUrl, setDisplayPageUrl] = useState("url");
  const [displayPageKeywords, setDisplayPageKeywords] = useState("keyword");
  const [displayexcludePageUrl, setDisplayExcludePageUrl] = useState("url");
  const [displayexcludePageKeywords, setDisplayExcludePageKeywords] = useState("keyword");
  const [name, setName] = useState('My First Free Shipping Bar');
  // const [excludepage, setExcludePage] = useState('notexclude ');
  const [displayonpage, setDisplayonPage] = useState('all');
  const [gradientColors, setGradientColors] = useState({
    deg: '',
    color1: '',
    color2: '',
    color3: ''
  });

  const handleChangeName = useCallback(
    newValue => setName(newValue),
    [],
  );

  const [freeshippinggoal, setFreeshippingGoal] = useState(100);

  const handleChangefreeshippingGoal = useCallback(
    newValue => setFreeshippingGoal(newValue),
    [],
  );

  const [initialmessage, setInitialMessage] = useState('Free shipping for orders over');

  const handleChangeInitialMessage = useCallback(
    newValue => setInitialMessage(newValue),
    [],
  );

  const [initialmessageblank, setInitialMessageBlank] = useState('');

  const handleChangeInitialMessageBlank = useCallback(
    newValue => setInitialMessageBlank(newValue),
    [],
  );

  const [progressmessage, setProgressMessage] = useState('Only');

  const handleChangeProgressMessage = useCallback(
    newValue => setProgressMessage(newValue),
    [],
  );

  const [awayfromfreeshipping, setAwayFromFreeShipping] = useState('away from free shipping');

  const handleChangeAwayFromFreeShipping = useCallback(
    newValue => setAwayFromFreeShipping(newValue),
    [],
  );

  const [goalachievedmessage, setGoalAchievedMessage] = useState('Congratulations! You have got free shipping');

  const handleChangeGoalAchievedMessage = useCallback(
    newValue => setGoalAchievedMessage(newValue),
    [],
  );


  const handleSelectCurrency = (event) => {
    setSelectcurrency(event);
  }

  const handleChangeCurrencyIcon = useCallback(
    value => setSelectcurrency(value),
  )

  const handleCurrencySymbolPosition = useCallback(
    value => setSelectCurrencySymbolPosition(value),
    [],
  );

  console.log("setSelectCurrencySymbolPosition______>", selectcurrencysymbolposition);

  const CurrencySymbolPosition = [
    { label: 'Place symbol before the amount', value: "0" },
    { label: 'Place symbol After the amount', value: "1" },
  ];

  const changeGradientColor = (deg = null, color1, color2 = null, color3 = null, e) => {
    // console.log("changeGradientColor", deg, color1, color2, e.target.style.color);

    setTextColor(e.target.style.color)

    if (deg === null) {
      if (color2 === null) {
        setGradientColors({ ...gradientColors, color1: color1 });
        setBackgroundImage(`linear-gradient(${color1})`);
      }
      else if (color3 === null) {
        setGradientColors({ ...gradientColors, color1: color1, color2: color2 });
        setBackgroundImage(`linear-gradient(${color1}, ${color2})`);
      }
      else {
        setGradientColors({ ...gradientColors, color1: color1, color2: color2, color3: color3 });
        setBackgroundImage(`linear-gradient(${color1}, ${color2},${color3})`);
      }
    }
    else {
      if (color2 === null) {
        setGradientColors({ ...gradientColors, deg: deg, color1: color1 });
        setBackgroundImage(`linear-gradient(${deg}, ${color1}`);
      }
      else if (color3 === null) {
        setGradientColors({ ...gradientColors, deg: deg, color1: color1, color2: color2 });
        setBackgroundImage(`linear-gradient(${deg}, ${color1}, ${color2}`);
      }
      else {
        setGradientColors({ ...gradientColors, deg: deg, color1: color1, color2: color2, color3: color3 });
        setBackgroundImage(`linear-gradient(${deg}, ${color1}, ${color2}, ${color3})`);
      }
    }
  }

  // handle basic template
  const handleBasicTemplate = (event) => {
    if (event.target.style.backgroundColor) {
      setBackgroundColor(event.target.style.backgroundColor);
    } else {

      setBackgroundImage(event.target.style.backgroundImage)
    }
    setTextColor(event.target.style.color)
    setSpecialTextColor(event.target.style.color)
    setShowContent(1)
    setCustomCss()
  }

  // console.log("selectedImage----->>>>>>>>>>", selectedImage);

  const handleBackgroundColor = (event) => {
    setBackgroundColor(rgbToHex(event.target.value))
    console.log("BckgroundColor--------->--------->", rgbToHex(event.target.value));
  }
  console.log("BACKGROUNDCOLOR----->", backgroundColor);

  const handleBackgroundImage = (event) => {
    setBackgroundImage(event.target.value)
  }

  const handleTextColor = (event) => {
    setTextColor(event.target.value)
  }

  const handleSpecialTextColor = (event) => {
    setSpecialTextColor(event.target.value)
  }


  const handleSelectedFontSize = useCallback((event) => {

    setSelectedFontSize(event);

  }
  );

  // console.log('color>>>>>>>>>>>', textColor);

  const handleBarPadding = useCallback((event) => {

    setBarPadding(event);

  });

  const handleDisappearAfter = useCallback((event) => {

    setDisappearAfter(event);

  });

  const handleDisappearBefore = useCallback((event) => {

    setDelayBefore(event);

  });

  const handleFadeOut = useCallback((event) => {
    console.log('handleFadeOut>', event);
    setTime(event);

  });

  const [fontBtnBG, setFontBtnBG] = useState()

  const handleSelectedFontFamily = (event) => {
    // console.log("OnClick--->", event);
    setSelectedFontFamily(event)
    setFontBtnBG('#008060');
  }

  const handleBackgroundOpacity = (event) => {
    setBackgroundOpacity(event.target.value)
  }

  const handleOpenModel = () => {
    setBasicTemplate(1)
    window.scrollTo({
      left: 0,
      top: 550,
      behavior: "smooth",
    })
    setId(0)
  }

  const selectedStyle = {
    background: backgroundColor,
    color: textColor,
    fontFamily: selectedFontFamily,
    fontSize: selectedFontSize + "px",
    padding: barPadding + "px",
    opacity: backgroundOpacity,
    backgroundImage: backgroundimage,

  }

  const handleClear = () => {
    setBasicTemplate(0)
    setShowContent(0);
    setshowGradientColorImage(0);
    setshowPatternImage(0);
    setshowFittedImage(0);
    setId(0)

  }

  const [open, setOpen] = useState(true);

  const handlecontentconfiguration = useCallback(() => setOpen((open) => !open), []);

  const [styleconfiguration, setStyleconfiguration] = useState(true);
  const handlestyleconfiguration = useCallback(() => setStyleconfiguration((open) => !open), []);

  // const [NoImage, setNoImage] = useState(true);
  const handleNoImage = () => {
    setshowGradientColorImage(0);
    setshowPatternImage(0);
    setshowFittedImage(0);
    setBackgroundImage('');
    setBtnBG('NoImage');
  }

  const [gradientcolorimage, setGradientColorImage] = useState(false);

  const handleGradientColorImage = () => {
    setPatternImage((open) => !open);
    setFittedImage((open) => !open);
    setshowPatternImage(0);
    setshowFittedImage(0);
    setGradientColorImage((open) => !open);
    setshowGradientColorImage(1);
    setBtnBG("GradientColorImage")
  }

  const [PatternImage, setPatternImage] = useState(false);

  const handlePatternImage = () => {
    setGradientColorImage((open) => !open);
    setFittedImage((open) => !open);
    setshowGradientColorImage(0);
    setshowFittedImage(0);
    setPatternImage((open) => !open);
    setshowPatternImage(1);
    setBtnBG('PatternImage')
  }

  const [FittedImage, setFittedImage] = useState(false);
  const handleFittedImage = () => {
    setGradientColorImage((open) => !open);
    setPatternImage((open) => !open);
    setshowGradientColorImage(0);
    setshowPatternImage(0);
    setFittedImage((open) => !open);
    setshowFittedImage(1);
    setBtnBG('FittedImage')
  }

  const handleGradientsColors = (event) => {
    console.log("event.target.style.background", event.target.style, event.target.style.background);
    setBackgroundColor(event.target.style.background)
    setTextColor(event.target.style.color)
  };

  const [targetingconfiguration, setTargetingconfiguration] = useState(true);
  const handleTargetingconfiguration = useCallback(() => setTargetingconfiguration((open) => !open), []);

  const [currencyconfiguration, setCurrencyConfiguration] = useState(true);
  const handleCurrencyConfiguration = useCallback(() => setCurrencyConfiguration((open) => !open), []);

  const [customcodeconfiguration, setCustomCodeConfiguration] = useState(true);
  const handleCustomCodeConfiguration = useCallback(() => setCustomCodeConfiguration((open) => !open), []);


  const [linkUrl, setLinkUrl] = useState("https://apps.shopify.com/partners/hextom");
  const [AddLinktotheBar, setAddLinktotheBar] = useState("0");

  const handleSelectAddLinktotheBar = useCallback(
    value => setAddLinktotheBar(value),
    [],
  );

  const OptionsAddLinktotheBar = [
    { label: 'OFF', value: "0" },
    { label: 'ON', value: "1" },
  ];


  const [IncludeCloseButton, setIncludeCloseButton] = useState('0');

  const handleSelectIncludeCloseButton = useCallback(
    value => setIncludeCloseButton(value),
    [],
  );

  const OptionsIncludeCloseButton = [
    { label: 'YES', value: '1' },
    { label: 'NO', value: '0' },
  ];

  const [AddaProgressBar, setAddaProgressBar] = useState('NO');

  const handleSelectAddaProgressBar = useCallback(
    value => setAddaProgressBar(value),
    [],
  );

  const OptionsAddaProgressBar = [
    { label: 'YES', value: 'YES' },
    { label: 'NO', value: 'NO' },
  ];


  const [displayschedule, setDisplaySchedule] = useState('alwaysdisplay ');
  var handleDisplaySchedule = useCallback(
    function (value) {
      return setDisplaySchedule(value);
    },
    []);


  const [customCss, setCustomCss] = useState("");
  // const [customJs, setCustomJs] = useState("");

  const handleCustomCode = useCallback((event) => {
    setCustomCss(event);
  });

  const handleDisplayPageUrl = useCallback((event) => {
    setDisplayPageUrl(event);
  });

  const [keywordError, setKeywordError] = useState('');
  const validateKeywords = (keywords) => {
    const keywordList = keywords.split(',').map((keyword) => keyword.trim());
    console.log("keywordList---", keywordList, keywordList.length);

    if (keywordList.includes("")) {
      return 'Please enter keywords separated by a comma.';
    }

    for (const keyword of keywordList) {
      if (keyword === '') {
        return 'Empty keyword found.';
      }
    }

    return '';
  };

  const handleDisplayPageKeyword = (value) => {
    const error = validateKeywords(value);
    setDisplayPageKeywords(value);
    setKeywordError(error);
  };

  // const handleDisplayPageKeyword = useCallback((event) => {
  //   setDisplayPageKeywords(event);
  // });

  const handleDisplayExcludePageUrl = useCallback((event) => {
    setDisplayExcludePageUrl(event);
  });

  const handleDisplayExcludePageKeyword = useCallback((event) => {
    setDisplayExcludePageKeywords(event);
  });

  const [selectedshippingfee, setSelectedShippingFee] = useState(['']);
  const handleShippingFee = ((value) => setSelectedShippingFee(value), []);

  // radiobtn display page
  const [value, setValue] = useState('all');

  const handleChangeRadioBtn = useCallback(
    (_, newValue) => {
      setValue(newValue),
      console.log("setValue--",newValue)
        setDisplayonPage(newValue)
    },
    []
  )


  // radiobtn exclude page
  const [value1, setValue1] = useState('notexclude');
  const [displayexcludePage, setDisplayExcludePage] = useState("notexclude");
  const handleChangeRadioBtnExclude = useCallback(
    (_, newValue) => {
      setValue1(newValue),
        console.log("setValue1--", newValue)
      setDisplayExcludePage(newValue)
    },
    // (event) => setDisplayExcludePage(event.target.value),
    []
  )

  // radiobtn Select a Display Position:
  const [value2, setValue2] = useState('restofthepage');
  const [DisplayPosition, setDisplayPosition] = useState('display_position');
  var handleChangeRadioBtnDisplayPosition = useCallback(
    (_, newValue) => setValue2(newValue),
    (event) => setDisplayPosition(event.target.value),
    []
  );

  // radiobtn device target
  const [value3, setValue3] = useState('displayboth')
  const [devicetarget, setDeviceTarget] = useState('displayboth');

  var handleDeviceTarget = useCallback(
    (_, newValue) => {
      setValue3(newValue),
        setDeviceTarget(newValue)
    },
    []
  );



  // radiobtn product targeting
  const [value4, setValue4] = useState('includenonphysical')
  const [producttargeting, setProductTargeting] = useState('includenonphysical ');
  var handleProductTargeting = useCallback(
    (_, newValue) => setValue4(newValue),
    (event) => setProductTargeting(event.target.value),
    []
  );

  // radiobtn customer targeting
  const [value5, setValue5] = useState('allcustomer')
  const [customertargeting, setCustomerTargeting] = useState('allcustomer');
  var handleCustomerTargeting = useCallback(
    (_, newValue) => setValue5(newValue),
    (event) => setCustomerTargeting(event.target.value),
    []
  );

  // delete modal
  const [active, setActive] = useState(false);

  const handleModalChange = (id) => (
    setId(id),
    setActive(!active), [active]
  )


  const urlParams = new URLSearchParams(window.location.search);
  const shopName = urlParams.get("shop");
  const [shop_name, setshop_name] = useState(shopName);

  const [AfterBasicData, setAfterBasicData] = useState(0);
  const [Id, setId] = useState(0);

  // console.log("shopname=-===", shopName);

  // fetching data
  const fetchData = async () => {
    try {
      await axios.get('/api/getByShopNameShipping', {
        headers: {
          "X-Shop-Name": shopName
        },
      })
        .then(res =>
          // console.log("GETALL-------->", response.data.data),
          setProducts(res.data.data),
        )
    } catch (error) {
      console.log(error);
    }
  }

  // create shipping
  const handleSubmit = () => {

    let PostData = {
      // id: id,
      // shop_id: shopId,
      "shop_name": shop_name,
      'name': name,
      "free_shipping_goal": freeshippinggoal,
      "message1": initialmessage,
      "message2": initialmessageblank,
      "message3": progressmessage,
      "message4": awayfromfreeshipping,
      "message5": goalachievedmessage,
      "add_link_to_bar": AddLinktotheBar,
      "link_URL": linkUrl,
      "include_close_button": IncludeCloseButton,
      "add_progress_bar": AddaProgressBar,
      "display_position": DisplayPosition,
      "currency": selectcurrency,
      "currency_symbol": selectcurrency,
      "currency_symbol_position": selectcurrencysymbolposition,
      "background_color": backgroundColor,
      "text_color": textColor,
      "special_text_color": specialTextColor,
      "background_color_opacity": backgroundOpacity,
      "background_image": backgroundimage,
      "font_family": selectedFontFamily,
      "font_size": selectedFontSize,
      "bar_padding": barPadding,
      "disappear_after": disappearAfter,
      "delay_before_repeating": delayBefore,
      "time_to_fade_in_out": time,
      "display_on_page": displayonpage,
      "display_page_url": displayPageUrl,
      "display_page_keyword": displayPageKeywords,
      "exclude_page": displayexcludePage,
      "exclude_page_url": displayexcludePageUrl,
      "exclude_page_keyword": displayexcludePageKeywords,
      "device_target": devicetarget,
      "product_targeting": producttargeting,
      "shipping_fee_exceptions": 'selectedshippingfee',
      "customer_targeting": customertargeting,
      "geo_location_target": "geoLocationTarget",
      "exclude_geo_location": "exludegeotarget",
      "display_schedule": displayschedule,
      "custom_code": "customCss",
      // custom_css: customCss,
      // custom_js: customJs
    }

    axios.post('/api/addShipping', PostData).then(res => {
      console.log("POSTDATA-------->", res.data);
      if (res.data) {
        toast(<p style={{ fontSize: 16 }}>Record Added success</p>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "success"
        });
        // alert("You have successfully added")
      }

    }).catch((error) => {
      console.log(error, error.message);
      toast(<p style={{ fontSize: 16 }}>Record not added success</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error"
      });
      // alert(" Error!!!")
    }
    );
    fetchData()
    setShowContent(0);
    setBasicTemplate(0);
    setAfterBasicData(0);
  }

  // get by id shipping
  const handleGetByIdData = (id) => {

    axios.get(`/api/getByIdShipping/${id}`, {
      headers: {
        "X-Shop-Name": shopName,
      },
    })
      .then(res => {
        console.log('EDITDATA--------->--------->', res.data.data);
        if (res.data.success) {

          setId(res.data.data.id);
          // setShopId(res.data.data.shop_id)
          setshop_name(res.data.data.shop_name)
          setName(res.data.data.name)
          setFreeshippingGoal(res.data.data.free_shipping_goal)
          setInitialMessage(res.data.data.message1)
          setInitialMessageBlank(res.data.data.message2)
          setProgressMessage(res.data.data.message3)
          setAwayFromFreeShipping(res.data.data.message4)
          setGoalAchievedMessage(res.data.data.message5)
          setAddLinktotheBar(res.data.data.add_link_to_bar)
          setLinkUrl(res.data.data.link_URL)
          setIncludeCloseButton(res.data.data.include_close_button);
          setDisplayPosition(res.data.data.display_position);
          setSelectcurrency(res.data.data.currency)
          setSelectcurrency(res.data.data.currency_symbol)
          setSelectCurrencySymbolPosition(res.data.data.currency_symbol_position)
          setBackgroundColor(res.data.data.background_color)
          setTextColor(res.data.data.text_color)
          setSpecialTextColor(res.data.data.special_text_color)
          setBackgroundOpacity(res.data.data.background_color_opacity)
          setBackgroundImage(res.data.data.background_image)
          setSelectedFontFamily(res.data.data.font_family)
          setSelectedFontSize(res.data.data.font_size)
          setBarPadding(res.data.data.bar_padding)
          setDisappearAfter(res.data.data.disappear_after)
          setDelayBefore(res.data.data.delay_before_repeating)
          setTime(res.data.data.time_to_fade_in_out)
          setDisplayonPage(res.data.data.display_on_page)
          setDisplayExcludePage(res.data.data.exclude_page)
          setDisplayPageUrl(res.data.data.display_page_url)
          setDisplayPageKeywords(res.data.data.display_page_keyword)
          setDisplayExcludePageUrl(res.data.data.exclude_page_url)
          setDisplayExcludePageKeywords(res.data.data.exclude_page_keyword)
          setDeviceTarget(res.data.data.device_target)
          setProductTargeting(res.data.data.product_targeting)
          setCustomerTargeting(res.data.data.customer_targeting)
          // setCustomCss(res.data.data.custom_css)
          // setCustomJs(res.data.data.custom_js)

          setShowContent(1);
          setAfterBasicData(1);

        }
      }
      )
      .catch((error) => {
        console.log(error)
      });
  }

  // edit shipping data
  const handleUpdateData = (id) => {

    console.log("displayonpage", displayonpage)

    let PostData = {
      // id: id,
      // shop_id: shopId,
      "shop_name": shop_name,
      'name': name,
      "free_shipping_goal": freeshippinggoal,
      "message1": initialmessage,
      "message2": initialmessageblank,
      "message3": progressmessage,
      "message4": awayfromfreeshipping,
      "message5": goalachievedmessage,
      "add_link_to_bar": AddLinktotheBar,
      "link_URL": linkUrl,
      "include_close_button": IncludeCloseButton,
      "add_progress_bar": AddaProgressBar,
      "display_position": DisplayPosition,
      "currency": selectcurrency,
      "currency_symbol": selectcurrency,
      "currency_symbol_position": selectcurrencysymbolposition,
      "background_color": backgroundColor,
      "text_color": textColor,
      "special_text_color": specialTextColor,
      "background_color_opacity": backgroundOpacity,
      "background_image": backgroundimage,
      "font_family": selectedFontFamily,
      "font_size": selectedFontSize,
      "bar_padding": barPadding,
      "disappear_after": disappearAfter,
      "delay_before_repeating": delayBefore,
      "time_to_fade_in_out": time,
      "display_on_page": displayonpage,
      "display_page_url": displayPageUrl,
      "display_page_keyword": displayPageKeywords,
      "exclude_page": displayexcludePage,
      "exclude_page_url": displayexcludePageUrl,
      "exclude_page_keyword": displayexcludePageKeywords,
      "device_target": devicetarget,
      "product_targeting": producttargeting,
      "shipping_fee_exceptions": 'selectedshippingfee',
      "customer_targeting": customertargeting,
      "geo_location_target": "geoLocationTarget",
      "exclude_geo_location": "exludegeotarget",
      "display_schedule": displayschedule,
      "custom_code": "customCss",
      // custom_css: customCss,
      // custom_js: customJs
    }

    axios.put(`/api/updateShipping/` + id, PostData, {
      headers: {
        "X-Shop-Name": shopName
      },
    }).then(res => {
      console.log("POSTDATA-------->", res.data);
      if (res.data) {
        toast(<p style={{ fontSize: 16 }}>Record Updated success</p>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "success"
        });
        // alert("You have successfully updated")
      }

    }).catch((error) => {
      console.log(error, error.message);
      toast(<p style={{ fontSize: 16 }}>Record not updated successfully</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error"
      });
      // alert(" Error!!!")
    }
    );
    fetchData();
    setShowContent(0);
    setBasicTemplate(0);
    setAfterBasicData(0);
  }

  // isActive 
  const handleActivate = (id, shop_name) => {

    axios.put(`/api/isActive/${id}`, shop_name, {
      headers: {
        "X-Shop-Name": shopName
      },
    })
      .then(res => {
        console.log(res.data.data);

        if (res.data.data) {
          toast(<p style={{ fontSize: 16 }}>Activate successfully</p>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success"
          });
        }

        // //getData();
        fetchData();


      }).catch((error) => {
        console.log(error)
        toast(<p style={{ fontSize: 16 }}>Activate not successfully</p>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "error"
        });
        // alert("error")
      });

  }

  // delete shipping
  const handleDeleteData = (id) => {

    axios.delete(`/api/deleteShipping/` + id, {
      headers: {
        "X-Shop-Name": shopName
      },
    })
      .then(res => {
        console.log("Delete Record-->", res.data.data);
        if (res.data.data) {
          toast(<p style={{ fontSize: 16 }}>Record deleted successfully</p>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success"
          });
        }
        fetchData();
        setActive(!active), [active]
      })
      .catch((error) => {
        console.log(error)
        toast(<p style={{ fontSize: 16 }}>Record not deleted successfully</p>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "error"
        });
      });

  }

  // duplicate
  const handleDuplicate = (id, shop_name) => {

    axios.put(`/api/getByIdAndDuplicate/` + id, shop_name, {
      headers: {
        "X-Shop-Name": shopName
      },
    })
      .then(res => {
        console.log('DUPLICATEDATA___>------->', res.data.data);
        if (res.data.data) {
          toast(<p style={{ fontSize: 16 }}>Duplicate Success!</p>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success"
          });
          fetchData();

        } else {
          toast(<p style={{ fontSize: 16 }}>Something went wrong!</p>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "error"
          });
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  // rows
  const rows =
    products.map(product => {
      return [
        <>
          {
            product.is_activate === 1 ?
              <>
                <Badge status="success">Active</Badge> {product.name}
              </>
              :
              <>
                <Badge status="warning">Pause</Badge> {product.name}
              </>
          }</>,
        product.GeoTarget = 'All Countries',

        product.Excluded = 'N / A',
        <ButtonGroup>
          <Button primary onClick={() => handleGetByIdData(product.id)}>Edit</Button>
          <Button onClick={() => handleDuplicate(product.id)}>Duplicate</Button>
          {product.is_activate === 1 ?
            <Button onClick={() => handleActivate(product.id)}>Pause</Button> :

            <Button onClick={() => handleActivate(product.id)}>Active</Button>
          }
          {product.is_activate === 1 ? ''
            :
            <Button plain removeUnderline onClick={() => handleModalChange(product.id)}>Delete</Button>

          }
        </ButtonGroup>,
        product.Achievements = "Premium Only"
      ];
    })

  // get all currency
  useEffect(() => {
    axios.get('/api/getCurrency').then((response) => {
      console.log("getCurrency----->------>", response.data.DemoData
      );
      setCurrencyData(response.data.DemoData);

    })
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* delete modal */}
      <Modal
        open={active}
        onClose={handleModalChange}
      >
        <Modal.Section>
          <TextContainer>
            <p style={{ fontSize: "25px", textAlign: "center", marginBottom: '50px' }}>
              Are you sure you want to delete
            </p>
            <Stack gap='10' justify-content='center'>
              <Button size='large' onClick={handleModalChange}>Cancel</Button>
              <Button size='large' primary onClick={() => handleDeleteData(Id)}>Delete</Button>
            </Stack >
          </TextContainer>
        </Modal.Section>
      </Modal>
      {/* end delete modal */}

      <Page>
        <ToastContainer />
        <Layout>
          <Layout.Section>
            {/* [Required] Setup Free Shipping: */}
            <Card title='[Required] Setup Free Shipping:' sectioned>
              <p>Follow these steps to setup free shipping with a minimum order value for your Shopify store</p>
              <List type='number'>
                <List.Item>
                  Go to {' '}
                  <Link url="https://admin.shopify.com/store/testing-polaris-demo/settings/shipping" removeUnderline>
                    Shopify Admin &gt; Settings &gt; Shipping
                  </Link>
                </List.Item>
                <List.Item>
                  Open the relevant Shipping Profile
                </List.Item>
                <List.Item>
                  Add a Shipping Zone to this profile
                </List.Item>
                <List.Item>
                  Add Shipping Methods to this zone
                </List.Item>
                <List.Item>
                  Add a Condition and select "Based on order price"
                </List.Item>
                <List.Item>
                  Enter a minimum order price (same as the goal in the Free Shipping Bar App)
                </List.Item>
                <List.Item>
                  Once you complete it, click "Done"
                </List.Item>
              </List>
              <TextContainer>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  If you want to know and use all the features, {' '}
                  <Link url="https://support.hextom.com/hc/en-us/articles/11724902142355" removeUnderline>Watch Tutorial Video</Link>
                </p>
                <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Are you using Shopify Online Store 2.0 themes? {' '}
                  <Link url="https://admin.shopify.com/store/testing-polaris-demo/themes/146405097759/editor" removeUnderline>Are you using Shopify Online Store 2.0 themes? {' '} </Link> To learn more <Link url="https://support.hextom.com/hc/en-us/articles/360009973554" removeUnderline>Click Here</Link>
                </p>
                <p>Enable this feature can help your site load bars faster. Also, this is needed if you would like bars to target products or customers.
                  If you have questions, email us at help@hextom.com, and we will help.</p>
              </TextContainer>
            </Card>
            {/* end [Required] Setup Free Shipping: */}

            {products && products.length > 0 ?
              <>
                {/* Free Shipping Bar (FSB) Dashboard */}
                <Card sectioned>
                  <Card.Section>
                    <Stack>
                      <Stack.Item fill>
                        <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Free Shipping Bar (FSB) Dashboard</p>
                      </Stack.Item>
                      <Stack.Item>
                        <Button>Translate Bar</Button>
                      </Stack.Item>
                      <Stack.Item>
                        <Button primary onClick={handleOpenModel}>Create New Bar</Button>
                      </Stack.Item>
                    </Stack>

                    <DataTable
                      columnContentTypes={['text', 'text', 'numeric', 'text', 'text']}
                      headings={['Name', 'Geo Target', 'Excluded', 'Actions', 'Achievements']}
                      rows={rows}
                    />
                  </Card.Section>

                </Card>
                {/* end Free Shipping Bar (FSB) Dashboard */}
              </>
              :
              <>
                {/* Create your 1st Free Shipping Bar */}
                <MediaCard
                  title="Create your 1st Free Shipping Bar?"
                  primaryAction={{
                    content: 'Create New Bar',
                    onAction: () => { handleOpenModel() }
                  }}
                  description={`The short tutorial video explains how to create the free shipping bar.`}
                  popoverActions={[{ content: 'Dismiss', onAction: (e) => { handleClear(e) } }]}
                >
                  <VideoThumbnail
                    // videoLength={80}
                    thumbnailUrl={maxresdefault}
                  // onClick={() => console.log('clicked')}
                  />
                  {/* <Thumbnail
                    source={maxresdefault}
                    size="large"
                    alt="free shipping bar image"
                  /> */}
                </MediaCard>

                {/* end Create your 1st Free Shipping Bar */}
              </>
            }

            {/* basictemplate and premiumtemplate */}
            {basictemplate && basictemplate === 1 ?
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <Card title='Basic template' sectioned>
                    <TextContainer>
                      <p className='text' style={{ backgroundColor: '#1E1E20', color: '#F2CA80' }} onClick={handleBasicTemplate} >Bold and Clear</p>
                      <p className='text' style={{ backgroundColor: '#4C4C4C', color: '#CCCCCC' }} onClick={handleBasicTemplate}>Shades of Grey</p>
                      <p className='text' style={{ backgroundColor: '#F2F2F2', color: '#354B5E' }} onClick={handleBasicTemplate}>Bright and Elegant</p>
                      <p className='text' style={{ backgroundColor: '#FFFFFF', color: '#FF6D37' }} onClick={handleBasicTemplate}>🚚 It’s Easy 🚚</p>
                      <p className='text' style={{ backgroundColor: '#FFF0A5', color: '#B64926' }} onClick={handleBasicTemplate}>Harvest Gold</p>
                      <p className='text' style={{ backgroundColor: '#C7F9D8', color: '#3F3F3F' }} onClick={handleBasicTemplate}>🛍Good Mood 🛍</p>
                      <p className='text' style={{ backgroundColor: '#05AFF2', color: '#F2F2F2' }} onClick={handleBasicTemplate}>Trust Me</p>
                      <p className='text' style={{ backgroundColor: '#FFD9D2', color: '#7F4D43' }} onClick={handleBasicTemplate}>Fairy Tale</p>
                      <p className='text' style={{ backgroundColor: '#EB3E3E', color: '#FFF681' }} onClick={handleBasicTemplate}>Important Things</p>
                    </TextContainer>
                  </Card>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <Card title='Premium template Upgrade' sectioned>
                    <TextContainer>
                      <p className='text' style={{ backgroundImage: `url(${blckdiamond})`, color: '#000000' }} onClick={handleBasicTemplate}>Black Diamond</p>
                      <p className='text' style={{ backgroundImage: `url(${amazonian})`, color: '#EAD7BA' }} onClick={handleBasicTemplate}>Amazonian</p>
                      <p className='text' style={{ backgroundImage: `url(${nikki})`, color: '#6B6B6B' }} onClick={handleBasicTemplate}>Nikki</p>
                      <p className='text' style={{ backgroundImage: `url(${giftspark})`, color: '#6B6B6B' }} onClick={handleBasicTemplate}>Gift Spark</p>
                      <p className='text' style={{ backgroundImage: `url(${itsnewday})`, color: '#875A3C' }} onClick={handleBasicTemplate}>It’s a New Day</p>
                      <p className='text' style={{ backgroundImage: `url(${fullspring})`, color: '#3F3F3F' }} onClick={handleBasicTemplate}>Full Spring</p>
                      <p className='text' style={{ backgroundImage: `url(${summerwave})`, color: '#002B38' }} onClick={handleBasicTemplate}>Summer Wave</p>
                      <p className='text' style={{ backgroundImage: `url(${rosemakeup})`, color: '#E8535E' }} onClick={handleBasicTemplate}>Rose Makeup</p>
                      <p className='text' style={{ backgroundImage: `url(${classicxmas})`, color: '#FFFFFF' }} onClick={handleBasicTemplate}>Classic Xmas</p>
                    </TextContainer>
                  </Card>
                </Grid.Cell>
              </Grid>
              : ''}
            {/* end basictemplate and premiumtemplate */}

            {showContent && showContent === 1 ?
              <>
                {/* preview */}
                <div className="stickyHeader">
                  <Card title='Preview' sectioned >
                    <TextContainer>
                      <p id="v2_free_shipping_bar" className="text" style={selectedStyle}> {initialmessage}
                        {selectcurrencysymbolposition === "0" ?
                          <>
                            <span style={{ color: specialTextColor }}> {selectcurrency === "" ? "INR" : selectcurrency} {freeshippinggoal} </span> {initialmessageblank}
                            {IncludeCloseButton == "1" ?
                              <span className="closebtn">x</span>
                              : ''
                            }
                          </>
                          :
                          <>
                            <span style={{ color: specialTextColor }}> {freeshippinggoal} {selectcurrency === "" ? "INR" : selectcurrency} </span> {initialmessageblank}
                            {IncludeCloseButton == "1" ?
                              <span className="closebtn">x</span>
                              : ''
                            }
                          </>
                        }
                      </p>

                      <p id="v2_free_shipping_bar" className="text" style={selectedStyle}>{progressmessage}
                        {selectcurrencysymbolposition === "0" ?
                          <>
                            <span style={{ color: specialTextColor }}> {selectcurrency === "" ? "INR" : selectcurrency} {freeshippinggoal - 1} </span> {awayfromfreeshipping}
                            {IncludeCloseButton == "1" ?
                              <span className="closebtn">x</span>
                              : ''
                            }
                          </>
                          :
                          <>
                            <span style={{ color: specialTextColor }}> {freeshippinggoal - 1} {selectcurrency === "" ? "INR" : selectcurrency} </span>
                            {awayfromfreeshipping}
                            {IncludeCloseButton == "1" ?
                              <span className="closebtn">x</span>
                              : ''
                            }
                          </>
                        }
                      </p>

                      <p id="v2_free_shipping_bar" className="text" style={selectedStyle}>{goalachievedmessage}
                        {IncludeCloseButton == "1" ?
                          <span className="closebtn">x</span>
                          : ''
                        }
                      </p>
                    </TextContainer>
                  </Card>
                </div>
                {/* end preview */}

                {/* content configuration */}
                <Card sectioned>
                  <Stack>
                    <Stack.Item fill>
                      <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Content Configuration</p>
                    </Stack.Item>
                    <Stack.Item>
                      <Button onClick={handlecontentconfiguration}
                        ariaExpanded={open}
                        ariaControls="basic-collapsible"><Icon
                          source={ChevronDownMinor}
                          color="base"
                        /></Button>
                    </Stack.Item>
                  </Stack>
                  <Collapsible
                    open={open}
                    id="basic-collapsible"
                    transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                  >
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField
                          type="text"
                          name='name'
                          label="Name:"
                          value={name}
                          onChange={handleChangeName}
                          autoComplete="off" helpText={
                            <span>
                              For your own internal reference - only you can see it.
                            </span>
                          }
                        />
                      </FormLayout.Group>
                      <div style={{ marginTop: '20px' }}>
                        <p>Free Shipping Goal:</p>
                        <Stack>
                          <TextField
                            name='freeshippinggoal'
                            type="number"
                            value={freeshippinggoal}
                            onChange={handleChangefreeshippingGoal}
                            autoComplete="off"
                            helpText={
                              <span>
                                If no minimum order value is required, please set goal to 0.
                              </span>
                            }
                          />
                          <TextField
                            name='addsecondarygoal'
                            type="text"
                            onChange={() => { }}
                            autoComplete="off"
                            placeholder='Add Secondary Goal'
                            disabled
                          />
                          <Icon
                            source={LockMajor}
                            color="base"
                          />
                          <Link removeUnderline>Upgrade</Link>

                          <Icon
                            source={PlayCircleMajor}
                            color="base"
                          /><Link url='https://support.hextom.com/hc/en-us/articles/11725619312147' removeUnderline>Tutorial Video</Link>
                        </Stack>
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <p>
                          Initial Message:
                        </p>
                        <Stack>
                          <TextField id="message1" name="message1" variant="outlined" value={initialmessage} helperText="Displays when cart value is empty and check again" onChange={handleChangeInitialMessage} />
                          <p> {selectcurrency === "" ? "INR" : selectcurrency} {freeshippinggoal} </p>
                          <TextField id="message2" name="message2" variant="outlined" value={initialmessageblank} onChange={handleChangeInitialMessageBlank} xs={5} style={{ width: '100%' }} />
                          {/* <Stack.Item fill>
                            <TextField
                              type="text"
                              value={initialmessage}
                              onChange={handleChangeInitialMessage}
                              autoComplete="off"
                              placeholder='Free shipping for orders over '
                              helpText={
                                <span>
                                  Display when cart is empty.
                                </span>
                              }
                            />
                          </Stack.Item>
                          <Stack.Item>
                            <p>INR103</p>
                          </Stack.Item>
                          <Stack.Item fill>
                            <TextField />
                          </Stack.Item> */}
                        </Stack>
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <p>

                          Progress Message:
                        </p>
                        <Stack>
                          <TextField id="message3" name="message3" variant="outlined" value={progressmessage} helperText="Displays when cart value is less than the goal" onChange={handleChangeProgressMessage} />
                          <p> {selectcurrency === "" ? "INR" : selectcurrency} {freeshippinggoal - 1} </p>
                          <TextField id="message4" name="message4" variant="outlined" value={awayfromfreeshipping} onChange={handleChangeAwayFromFreeShipping} style={{ width: '100%' }} />
                          {/* <Stack.Item fill>
                            <TextField
                              type="text"
                              value={progressmessage}
                              onChange={handleChangeProgressMessage}
                              autoComplete="off"
                              // placeholder='Only '
                              helpText={
                                <span>
                                  Displays when cart value is less than the goal.
                                </span>
                              }
                            />
                          </Stack.Item>
                          <Stack.Item>
                            <p>INR102</p>
                          </Stack.Item>
                          <Stack.Item fill>
                            <TextField
                              type="text"
                              value={awayfromfreeshipping}
                              onChange={handleChangeAwayFromFreeShipping}
                              autoComplete="off"
                            />
                          </Stack.Item> */}
                        </Stack>
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <p>
                          Goal Achieved Message:
                        </p>
                        <TextField id="message5" name="message5" variant="outlined" value={goalachievedmessage} helperText="Displays when cart value is greater than goal and frontend display " onChange={handleChangeGoalAchievedMessage} />
                        {/* <TextField
                          type="text"
                          value={goalachievedmessage}
                          onChange={handleChangeGoalAchievedMessage}
                          autoComplete="off"
                          placeholder='Congratulations! You have got free shipping'
                          helpText={
                            <span>
                              Displays when cart value is greater than goal.
                            </span>
                          }
                        /> */}
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <p>

                          Add Link to the Bar (optional):
                        </p>
                        <Select
                          options={OptionsAddLinktotheBar}
                          onChange={handleSelectAddLinktotheBar}
                          value={AddLinktotheBar}
                          helpText={
                            <span>
                              The bar will be clickable after adding a link.
                            </span>
                          }
                        />
                        {AddLinktotheBar == "1" ?
                          // <Grid direction="column" alignItems="flex-start" >
                          <TextField id="link_url" name="link_url" label="Link URL" variant="outlined" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} helpText={
                            <span>
                              This address will be visited after clicking the bar.
                            </span>
                          } />
                          // </Grid>
                          : ''
                        }
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <p>
                          Include Close Button:
                        </p>
                        <Select
                          // label="Date range"
                          options={OptionsIncludeCloseButton}
                          onChange={handleSelectIncludeCloseButton}
                          value={IncludeCloseButton}
                          helpText={
                            <span>
                              Places an "x" button on the bar so that users can close it manually.
                            </span>
                          }
                        />
                      </div>

                      {/* <div style={{ marginTop: '20px' }}>
                        <Stack>
                          <p>
                            Add a progress bar:
                          </p>
                          <Badge status='success'>NEW FEATURE</Badge>
                          <Icon
                            source={LockMajor}
                            color="base"
                          />
                          <Link removeUnderline>Upgrade</Link>
                        </Stack>
                      </div> */}

                      {/* <div style={{ marginTop: '20px' }}> */}
                      <Select
                        options={OptionsAddaProgressBar}
                        onChange={handleSelectAddaProgressBar}
                        value={AddaProgressBar}
                        helpText={
                          <span>
                            Add a progress bar below the text.
                          </span>
                        }
                      />
                      <Stack>
                        <p>Select a Display Position:</p>
                      </Stack>
                      <div
                        style={{
                          marginTop: '20px',
                        }}
                      >
                        <Stack vertical>
                          <RadioButton
                            label="Top bar pushes down the rest of the page"
                            checked={
                              value2 ===
                              'restofthepage'
                            }
                            id="restofthepage"
                            name="restofthepage"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                          <RadioButton
                            label="Top bar pushes down the rest of the page (always visible while scrolling)"
                            checked={
                              value2 ===
                              'restofthepagealwaysvisiblewhilescrolling'
                            }
                            id="restofthepagealwaysvisiblewhilescrolling"
                            name="restofthepagealwaysvisiblewhilescrolling"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                          <RadioButton
                            label="Top bar overlaps top of the page"
                            checked={
                              value2 ===
                              'topofpage'
                            }
                            id="topofpage"
                            name="topofpage"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                          <RadioButton
                            label="Top bar overlaps top of the page (always visible while scrolling)"
                            checked={
                              value2 ===
                              'topofpagealwaysvisiblewhilescrolling'
                            }
                            id="topofpagealwaysvisiblewhilescrolling"
                            name="topofpagealwaysvisiblewhilescrolling"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                          <RadioButton
                            label="Bottom bar overlaps bottom of the page (always visible while scrolling)"
                            checked={
                              value2 ===
                              'bottomofpagealwaysvisiblewhilescrolling'
                            }
                            id="bottomofpagealwaysvisiblewhilescrolling"
                            name="bottomofpagealwaysvisiblewhilescrolling"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                          <RadioButton
                            label="Manual Placement – Allows manual insertion of the bar’s code into your theme"
                            checked={
                              value2 ===
                              'manualplacement'
                            }
                            id="manualplacement"
                            name="manualplacement"
                            onChange={
                              handleChangeRadioBtnDisplayPosition
                            }
                          />
                        </Stack>
                      </div>
                      {/* <ChoiceList
                        title="Select a Display Position:"
                        choices={[
                          { label: 'Top bar pushes down the rest of the page', value: 'hidden' },
                          { label: 'Top bar pushes down the rest of the page (always visible while scrolling)', value: 'optional' },
                          { label: 'Top bar overlaps top of the page', value: 'required' },
                          { label: 'Top bar overlaps top of the page (always visible while scrolling)', value: 'xyz' },
                          { label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)', value: 'abc' },
                          { label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme', value: 'pqr' }

                        ]}
                        selected={DisplayPosition}
                        onChange={handleSelectDisplayPosition}
                      /> */}
                      {/* </div> */}

                    </FormLayout>

                  </Collapsible>
                </Card>
                {/* end content configuration */}

                {/* style configuration */}
                <Card sectioned>
                  <Stack>
                    <Stack.Item fill>
                      <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Style Configuration</p>
                    </Stack.Item>
                    <Stack.Item>
                      <Button onClick={handlestyleconfiguration}
                        ariaExpanded={open}
                        ariaControls="basic-collapsible"><Icon
                          source={ChevronDownMinor}
                          color="base"
                        /></Button>
                    </Stack.Item>
                  </Stack>
                  <Collapsible
                    open={styleconfiguration}
                    id="basic-collapsible"
                    transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                  >
                    {/* inputs backgroundcolor, textcolor, and specialtextcolor */}
                    <div style={{ marginTop: '20px' }}>

                      <div style={{ marginBottom: '10px' }}>
                        <Stack distribution='fillEvenly'>
                          <Stack.Item>
                            <p>Background Color</p>
                          </Stack.Item>
                          <Stack.Item>
                            <p>Text Color</p>
                          </Stack.Item>
                          <Stack.Item>
                            <p>Special Text Color</p>
                          </Stack.Item>
                        </Stack>
                      </div>

                      <Stack distribution='fill'>

                        <input
                          type='color'
                          value={backgroundColor} onChange={(e) => { setBackgroundColor(e.target.value) }}
                          className="hidden"
                        />
                        <TextField id="background_color"
                          type='text' name="background_color" variant="outlined" value={backgroundColor} onChange={handleBackgroundColor} style={{ margin: 8 }} />

                        <input
                          type="color"
                          value={textColor} onChange={handleTextColor}
                          className="hidden"
                        />
                        <TextField id="text_color" name="text_color" variant="outlined" value={textColor} onChange={handleTextColor} style={{ margin: 8 }} />

                        <input
                          type="color"
                          value={specialTextColor} onChange={handleSpecialTextColor}
                          className="hidden"
                        />
                        <TextField id="special_text_color" name="special_text_color" variant="outlined" value={specialTextColor} onChange={handleSpecialTextColor} style={{ margin: 8 }} />

                      </Stack>
                    </div>
                    {/* end inputs backgroundcolor, textcolor, specialtextcolor */}


                    {/* background color opacity */}
                    <div style={{ marginTop: '20px' }}>
                      <Stack vertical>
                        <p style={{ marginTop: '10px' }}>Background Color Opacity: 0.99</p>
                        <input type="range" name="background_opacity" value={backgroundOpacity} onChange={handleBackgroundOpacity} step={0.1} max={1} style={{ width: '50%' }} />
                      </Stack>
                    </div>
                    {/* end background color opacity */}


                    <div style={{ marginTop: '20px' }}>
                      <p style={{ marginBottom: '10px' }}>Background Image Style: </p>
                      <ButtonGroup>
                        {btnBG && btnBG === 'NoImage' ?
                          <Button onClick={handleNoImage} primary>No Image</Button>
                          : <Button onClick={handleNoImage} >No Image</Button>
                        }
                        {btnBG && btnBG === 'GradientColorImage' ?
                          <Button onClick={handleGradientColorImage} primary>Gradient Color Image</Button>
                          :
                          <Button onClick={handleGradientColorImage} >Gradient Color Image</Button>
                        }
                        {btnBG && btnBG === 'PatternImage' ?
                          <Button onClick={handlePatternImage} primary>Pattern Image</Button>
                          :
                          <Button onClick={handlePatternImage} >Pattern Image</Button>
                        }
                        {btnBG && btnBG === 'FittedImage' ?
                          <Button onClick={handleFittedImage} primary>Fitted Image</Button>
                          :
                          <Button onClick={handleFittedImage} >Fitted Image</Button>
                        }
                      </ButtonGroup>
                    </div>

                    {showGradientColorImage && showGradientColorImage === 1 ?
                      // gradient color image
                      <>
                        <div>
                          {/* <div
                            open={gradientcolorimage}
                            id="basic-collapsible"
                            transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                          > */}
                          <Card sectioned>
                            <Grid columns={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }}>
                              <Grid.Cell>
                                <div style={{ color: '#FFF1AE', backgroundImage: 'linear-gradient(90deg, #FF6162, #FF9766)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }}
                                  //onClick={handleBasicTemplate}
                                  onClick={(e) => changeGradientColor("90deg", "#FF6162", "#FF9766", null, e)}
                                >
                                  Orange Juice <br /> 2 colors from left to right
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(990deg, #ef32d9, #89fffd)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("990deg", "#ef32d9", "#89fffd", null, e)}
                                >
                                  Azure Pop <br /> 2 colors from left to right
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#3F3F3F', backgroundImage: 'linear-gradient(90deg, #A1FFCE, #FAFFD1)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("90deg", "#A1FFCE", "#FAFFD1", null, e)}>
                                  Limeade <br /> 2 colors from left to right
                                </div>
                              </Grid.Cell>


                              <Grid.Cell>
                                <div style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(0deg, #FF6162, #FF9766)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("0deg", "#FF6162", "#FF9766", null, e)}>
                                  Sun Raise <br /> 2 colors from bottom to top (0 degree)
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#333333', backgroundImage: 'linear-gradient(45deg, #46CDCF, #bfffec)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("45deg", "#46CDCF", "#bfffec", null, e)}>
                                  Tropical Sea <br /> 2 colors from bottom left to top right (45 degree)
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(180deg, #42275a, #734b6d)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("180deg", "#42275a", "#734b6d", null, e)}>
                                  Mauve <br /> 2 colors from bottom to top  (180 degree)
                                </div>
                              </Grid.Cell>

                              <Grid.Cell>
                                <div style={{ color: '#FFF1AE', backgroundImage: 'linear-gradient(45deg, #b162df, #ffc757, #f0585d)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }}
                                  onClick={(e) => changeGradientColor("45deg", "#b162df", "#ffc757", "#f0585d", e)}
                                >
                                  Dawn<br />3 colors from bottom left to top right (45 degree)
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(45deg, #a97aff, #618cfe, #1fe9ec)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("45deg", "#a97aff", "#618cfe", "#1fe9ec", e)}>
                                  River<br />3 colors from bottom left to top right (45 degree)
                                </div>
                              </Grid.Cell>
                              <Grid.Cell>
                                <div style={{ color: '#3F3F3F', backgroundImage: 'linear-gradient(60deg, #dddddd, #ffffff, #dddddd)', border: 'none', padding: '10px', marginTop: '20px', width: '17rem', boxShadow: '-2px 2px 2px 2px #A3A3A3', marginBottom: '20px', height: '100px' }} onClick={(e) => changeGradientColor("60deg", "#dddddd", "#ffffff", "#dddddd", e)}>
                                  Gray Scale<br />3 colors from bottom left to top right (60 degree)
                                </div>
                              </Grid.Cell>
                            </Grid>


                            {/* select gradient color inputs */}
                            <div style={{ marginBottom: '10px' }}>
                              <Stack distribution='fillEvenly'>
                                <Stack.Item>
                                  <p>Gradient color 1</p>
                                </Stack.Item>
                                <Stack.Item>
                                  <p>Gradient color 2</p>
                                </Stack.Item>
                                <Stack.Item>
                                  <p>Gradient color 3</p>
                                </Stack.Item>
                              </Stack>
                            </div>
                            <Stack distribution='fill'>
                              {/* <Stack.Item> */}
                              <input
                                type="color"
                                value={gradientColors.color1}
                                onChange={(e) => {
                                  setGradientColors({ ...gradientColors, color1: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2})`)
                                }}
                                className="hidden"
                              />
                              <TextField id="background_color1" name="gradientbackground_color1" variant="outlined" value={gradientColors.color1} onChange={
                                (e) => {
                                  setGradientColors({ ...gradientColors, color1: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2})`)
                                }
                              } style={{ margin: 8 }} />
                              {/* </Stack.Item>
                              <Stack.Item> */}
                              <input
                                type="color"
                                value={gradientColors.color2}
                                onChange={(e) => {
                                  setGradientColors({ ...gradientColors, color2: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2})`)
                                }}
                                className="hidden"
                              />
                              <TextField id="background_color2" name="gradientbackground_color2" variant="outlined" value={gradientColors.color2}
                                onChange={(e) => {
                                  setGradientColors({ ...gradientColors, color2: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2})`)
                                }} style={{ margin: 8 }} />

                              <input
                                type="color"
                                value={gradientColors.color3}
                                onChange={(e) => {
                                  setGradientColors({ ...gradientColors, color3: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2},${gradientColors.color3})`)
                                }}
                                className="hidden"
                              />
                              <TextField id="background_color3" name="gradientbackground_color3" variant="outlined" value={gradientColors.color3}
                                onChange={(e) => {
                                  setGradientColors({ ...gradientColors, color3: e.target.value }),
                                    setBackgroundImage(`linear-gradient(${gradientColors.deg}, ${gradientColors.color1}, ${gradientColors.color2},${gradientColors.color3})`)
                                }}
                                style={{ margin: 8 }} />
                              {/* {gradientColors.color3 != null ?
                                  <>
                                  </>
                                  : ''
                                } */}
                              {/* </Stack.Item> */}
                            </Stack>
                            {/* end select gradient color inputs */}
                            {/* {gradientColors.color3} */}


                          </Card>
                          {/* </div> */}

                        </div>
                      </>
                      // end gradient color image

                      :
                      // pattern image
                      <>
                        {showPatternImage && showPatternImage === 1 ?
                          <>
                            <div>
                              {/* <Collapsible
                                open={PatternImage}
                                id="basic-collapsible"
                                transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                              expandOnPrint
                              > */}
                              <Card sectioned>

                                <Grid columns={{ xs: 1, sm: 3, md: 3, lg: 6, xl: 6 }}>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${christmas})`
                                    }} onClick={handleBasicTemplate}>
                                      Christmas
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${xmas})`, transition: 'transform 2s'
                                    }} onClick={handleBasicTemplate}>
                                      Christmas
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${sales})`
                                    }} onClick={handleBasicTemplate}>
                                      Sales
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${blackfriday})`
                                    }} onClick={handleBasicTemplate}>
                                      BlackFriday
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${cybermonday})`
                                    }} onClick={handleBasicTemplate}>
                                      CyberMonday
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#F04D4B', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${sakura})`
                                    }} onClick={handleBasicTemplate}>
                                      Sakura
                                    </div>
                                  </Grid.Cell>


                                  <Grid.Cell>
                                    <div style={{
                                      color: '#E8535E', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${acrylic})`
                                    }} onClick={handleBasicTemplate}>
                                      acrylic
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#6B6B6B', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${colorful})`
                                    }} onClick={handleBasicTemplate}>
                                      Memphis
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#E54E4E', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${hat})`
                                    }} onClick={handleBasicTemplate}>
                                      Christmas
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#E54E4E', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${candybar})`
                                    }} onClick={handleBasicTemplate}>
                                      Christmas
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#630621', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${valentines_02})`
                                    }} onClick={handleBasicTemplate}>
                                      Valentines
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#000000', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${valentines_04})`
                                    }} onClick={handleBasicTemplate}>
                                      Valentines
                                    </div>
                                  </Grid.Cell>


                                  <Grid.Cell>
                                    <div style={{
                                      color: '#6B6B6B', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${seigaiha})`
                                    }} onClick={handleBasicTemplate}>
                                      Seigaiha
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFF1AE', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${herb})`
                                    }} onClick={handleBasicTemplate}>
                                      Herb
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#3F3F3F', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${stpatrick_01})`
                                    }} onClick={handleBasicTemplate}>
                                      St Patrick
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#3F3F3F', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${congruent_pentagon})`
                                    }} onClick={handleBasicTemplate}>
                                      Pentagon
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#875A3C', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${halftone_yellow})`
                                    }} onClick={handleBasicTemplate}>
                                      Yellow
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#4C4C4C', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${newyear_beer})`
                                    }} onClick={handleBasicTemplate}>
                                      New Year
                                    </div>
                                  </Grid.Cell>


                                  <Grid.Cell>
                                    <div style={{
                                      color: '#4C4C4C', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${newyear_fireworks})`
                                    }} onClick={handleBasicTemplate}>
                                      New Year
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#002B38', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${waves})`
                                    }} onClick={handleBasicTemplate}>
                                      Waves
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${dust})`
                                    }} onClick={handleBasicTemplate}>
                                      Dust
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#F2CA80', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${dark_sharp_edges})`
                                    }} onClick={handleBasicTemplate}>
                                      Dark Sharp
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#F2CA80', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px',
                                      boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${halloween02})`
                                    }} onClick={handleBasicTemplate}>
                                      Halloween
                                    </div>
                                  </Grid.Cell>
                                  <Grid.Cell>
                                    <div style={{
                                      color: '#ff6100', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '45px', boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${ghost})`
                                    }} onClick={handleBasicTemplate}>
                                      Halloween
                                    </div>
                                  </Grid.Cell>

                                </Grid>

                                {/* select image */}
                                {/* <Stack>
                                  <input
                                    type="file"
                                    name="patternimageuploadname"
                                    onChange={(event) => {
                                      console.log("background image", event.target.files[0]);
                                      setSelectedImage(event.target.files[0]);
                                    }} />

                                  <input
                                    type="hidden"
                                    name="patternbackground_image"
                                    value={selectedImage}
                                  />
                                  {selectedImage && (
                                    <Grid container direction="row" alignItems="flex-start" style={{ margin: 8 }}>
                                      <p>Image Preview</p>

                                      <div>
                                        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                        <br />
                                        <Button onClick={() => setSelectedImage(null)}>Remove</Button>
                                      </div>
                                    </Grid>

                                  )}
                                </Stack> */}
                                {/* end select image */}

                                {/* <Stack>
                                  <DropZone onDrop={handleDropZoneDrop}>
                                    {uploadedFiles}
                                    {fileUpload}
                                  </DropZone>
                                </Stack> */}

                              </Card>
                              {/* </Collapsible> */}
                            </div>
                          </>
                          :
                          <>
                            {showFittedImage && showFittedImage === 1 ?
                              <>
                                <div>
                                  {/* <Collapsible
                                    open={FittedImage}
                                    id="basic-collapsible"
                                    transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                                    expandOnPrint
                                  > */}
                                  <Card sectioned>


                                    <Grid columns={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
                                      <Grid.Cell>
                                        <div style={{ color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', backgroundSize: 'cover', height: '60px', boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${new_year})` }} onClick={handleBasicTemplate}>
                                          New Year
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${fit_lunar})`
                                        }} onClick={handleBasicTemplate}>
                                          Lunar New Year
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${fit_valentine})`
                                        }} onClick={handleBasicTemplate}>
                                          Valentine
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${fit_halloween})`
                                        }} onClick={handleBasicTemplate}>
                                          Halloween
                                        </div>
                                      </Grid.Cell>

                                      <Grid.Cell>
                                        <div style={{ color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', backgroundSize: 'cover', fontFamily: 'Roboto', height: '60px', boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${thanks_giving})` }} onClick={handleBasicTemplate}>
                                          Thanksgiving
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${black_friday})`
                                        }} onClick={handleBasicTemplate}>
                                          Black Friday
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${cyber_monday})`
                                        }} onClick={handleBasicTemplate}>
                                          Cyber Monday
                                        </div>
                                      </Grid.Cell>
                                      <Grid.Cell>
                                        <div style={{
                                          color: '#FFFFFF', border: 'none', margin: '10px 0', padding: '10px', fontSize: '16px', fontFamily: 'Roboto', height: '60px', backgroundSize: 'cover',
                                          boxShadow: '-2px 2px 2px 0px #a3a3a3', backgroundImage: `url(${fit_christmas})`
                                        }} onClick={handleBasicTemplate}>
                                          Christmas
                                        </div>
                                      </Grid.Cell>
                                    </Grid>

                                    {/* <Stack>
                                      <input
                                        type="file"
                                        name="fittedimageuploadname"
                                        onChange={(event) => {
                                          console.log(event.target.files[0]);
                                          setSelectedImage(event.target.files[0]);
                                          setBackgroundImage(URL.createObjectURL(event.target.files[0]))
                                        }} />

                                      <input
                                        type="hidden"
                                        name="fittedbackground_image"
                                        value={selectedImage}
                                      />
                                      {selectedImage && (
                                        <Grid container direction="row" alignItems="flex-start" style={{ margin: 8 }}>
                                          <p>Image Preview</p>

                                          <div>
                                            <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                            <Button onClick={() => setSelectedImage(null)}>Remove</Button>
                                          </div>
                                        </Grid>

                                      )}
                                    </Stack> */}
                                  </Card>
                                  {/* </Collapsible> */}
                                </div>
                              </> : ''}
                          </>
                        }
                      </>
                      // end pattern image
                    }


                    {/* fonts */}
                    <div style={{ marginTop: '20px' }}>
                      <p style={{ marginBottom: '10px' }}>Fonts: </p>

                      <ButtonGroup>
                        {selectedFontFamily && selectedFontFamily === 'sans' ?
                          <Button primary onClick={() => handleSelectedFontFamily('sans')}><p style={{ fontFamily: 'sans' }}>Default Site Font</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('sans')}><p style={{ fontFamily: 'sans' }}>Default Site Font</p></Button>
                        }
                        {selectedFontFamily && selectedFontFamily === 'Helvetica' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Helvetica')}><p style={{ fontFamily: 'Helvetica' }}>Helvetica</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Helvetica')}><p style={{ fontFamily: 'Helvetica' }}>Helvetica</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Verdana' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Verdana')}><p style={{ fontFamily: 'Verdana' }}>Verdana</p></Button>

                          :
                          <Button onClick={() => handleSelectedFontFamily('Verdana')}><p style={{ fontFamily: 'Verdana' }}>Verdana</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Courier' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Courier')}><p style={{ fontFamily: 'Courier' }}>Courier</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Courier')}>Courier</Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Times New Roman' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Times New Roman')}><p style={{ fontFamily: 'Times New Roman' }}>Times New Roman</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Times New Roman')}><p style={{ fontFamily: 'Times New Roman' }}>Times New Roman</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Brush Script MT' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Brush Script MT')}><p style={{ fontFamily: 'Brush Script MT' }}>Brush Script MT</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Brush Script MT')}><p style={{ fontFamily: 'Brush Script MT' }}>Brush Script MT</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Serif' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Serif')}><p style={{ fontFamily: 'Serif' }}>Serif</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Serif')}><p style={{ fontFamily: 'Serif' }}>Serif</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Lato' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Lato')}><p style={{ fontFamily: 'Lato' }}>Lato</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Lato')}><p style={{ fontFamily: 'Lato' }}>Lato</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Roboto' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Roboto')}><p style={{ fontFamily: 'Roboto' }}>Roboto</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Roboto')}><p style={{ fontFamily: 'Roboto' }}>Roboto</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Josefin Sans' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Josefin Sans')}><p style={{ fontFamily: 'Josefin Sans' }}>Josefin Sans</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Josefin Sans')}><p style={{ fontFamily: 'Josefin Sans' }}>Josefin Sans</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Lobster' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Lobster')}><p style={{ fontFamily: 'Lobster' }}>Lobster</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Lobster')}><p style={{ fontFamily: 'Lobster' }}>Lobster</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Open Sans' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Open Sans')}><p style={{ fontFamily: 'Open Sans' }}>Open Sans</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Open Sans')}><p style={{ fontFamily: 'Open Sans' }}>Open Sans</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Poiret One' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Poiret One')}><p style={{ fontFamily: 'Poiret One' }}>Poiret One</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Poiret One')}><p style={{ fontFamily: 'Poiret One' }}>Poiret One</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Dancing Script' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Dancing Script')}><p style={{ fontFamily: 'Dancing Script' }}>Dancing Script</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Dancing Script')}><p style={{ fontFamily: 'Dancing Script' }}>Dancing Script</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Bangers' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Bangers')}><p style={{ fontFamily: 'Bangers' }}>Bangers</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Bangers')}><p style={{ fontFamily: 'Bangers' }}>Bangers</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Playfair Display' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Playfair Display')}><p style={{ fontFamily: 'Playfair Display' }}>Playfair Display</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Playfair Display')}><p style={{ fontFamily: 'Playfair Display' }}>Playfair Display</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Chewy' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Chewy')}><p style={{ fontFamily: 'Chewy' }}>Chewy</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Chewy')}><p style={{ fontFamily: 'Chewy' }}>Chewy</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Quicksand' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Quicksand')}><p style={{ fontFamily: 'Quicksand' }}>Quicksand</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Quicksand')}><p style={{ fontFamily: 'Quicksand' }}>Quicksand</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Great Vibes' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Great Vibes')}><p style={{ fontFamily: 'Great Vibes' }}>Great Vibes</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Great Vibes')}><p style={{ fontFamily: 'Great Vibes' }}>Great Vibes</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Righteous' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Righteous')}><p style={{ fontFamily: 'Righteous' }}>Righteous</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Righteous')}><p style={{ fontFamily: 'Righteous' }}>Righteous</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Crafty Girls' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Crafty Girls')}><p style={{ fontFamily: 'Crafty Girls' }}>Crafty Girls</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Crafty Girls')}><p style={{ fontFamily: 'Crafty Girls' }}>Crafty Girls</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Mystery Quest' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Mystery Quest')}><p style={{ fontFamily: 'Mystery Quest' }}>Mystery Quest</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Mystery Quest')}><p style={{ fontFamily: 'Mystery Quest' }}>Mystery Quest</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Montserrat' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Montserrat')}><p style={{ fontFamily: 'Montserrat' }}>Montserrat</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Montserrat')}><p style={{ fontFamily: 'Montserrat' }}>Montserrat</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Oswald' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Oswald')}><p style={{ fontFamily: 'Oswald' }}>Oswald</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Oswald')}><p style={{ fontFamily: 'Oswald' }}>Oswald</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Unica One' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Unica One')}><p style={{ fontFamily: 'Unica One' }}>Unica One</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Unica One')}><p style={{ fontFamily: 'Unica One' }}>Unica One</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Muli' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Muli')}><p style={{ fontFamily: 'Muli' }}>Muli</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Muli')}><p style={{ fontFamily: 'Muli' }}>Muli</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Raleway' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Raleway')}><p style={{ fontFamily: 'Raleway' }}>Raleway</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Raleway')}><p style={{ fontFamily: 'Raleway' }}>Raleway</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Carter One' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Carter One')}><p style={{ fontFamily: 'Carter One' }}>Carter One</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Carter One')}><p style={{ fontFamily: 'Carter One' }}>Carter One</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Varela Round' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Varela Round')}><p style={{ fontFamily: 'Varela Round' }}>Varela Round</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Varela Round')}><p style={{ fontFamily: 'Varela Round' }}>Varela Round</p></Button>

                        }
                        {selectedFontFamily && selectedFontFamily === 'Julius Sans One' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Julius Sans One')} ><p style={{ fontFamily: 'julis sans one' }}>Julius Sans One</p></Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Julius Sans One')} >
                            <p style={{ fontFamily: 'julis sans one' }}>Julius Sans One</p></Button>

                        }
                        {/* {selectedFontFamily && selectedFontFamily === 'Brush Script MT' ?
                          <Button primary onClick={() => handleSelectedFontFamily('Brush Script MT')}>Brush Script MT</Button>
                          :
                          <Button onClick={() => handleSelectedFontFamily('Brush Script MT')}>Brush Script MT</Button>

                        } */}
                      </ButtonGroup>
                    </div>
                    {/* end fonts */}


                    {/* fontsize */}
                    <div style={{ marginTop: '20px' }}>
                      <TextField type="number" id="font_size" name="font_size" min={1}
                        label="FontSize:"
                        value={selectedFontSize}
                        onChange={handleSelectedFontSize}
                        connectedRight={
                          <Select
                            label="Unit of time"
                            labelHidden
                            options={['PX']}
                          />
                        }
                        helpText={
                          <span>
                            Bar height is determined by Font Size and Bar Padding.
                          </span>
                        } />
                    </div>
                    {/* end fontsize */}


                    {/* bar padding */}
                    <div style={{ marginTop: '20px' }}>
                      <TextField type="number" name="bar_padding" variant="outlined" inputProps={{ min: 1 }} value={barPadding} onChange={handleBarPadding} label='Bar Padding:'
                        connectedRight={
                          <Select
                            label="Unit of time"
                            labelHidden
                            options={['PX']}
                          />
                        }
                        helpText={
                          <span>
                            Space between the text and the upper/lower borders.
                          </span>
                        } />
                    </div>
                    {/* end bar paddinng */}


                    {/* disappear after */}
                    <div style={{ marginTop: '20px' }}>
                      <TextField type="number" id="disappear_after" name="disappear_after" variant="outlined" inputProps={{ min: 0 }} value={disappearAfter} onChange={handleDisappearAfter} label='Disappear After:'
                        connectedRight={
                          <Select
                            label="Unit of time"
                            labelHidden
                            options={['Seconds']}
                          />
                        }
                        helpText={
                          <span>
                            Bar will not disappear if set to 0.
                          </span>
                        } />
                    </div>
                    {/* end disappear after */}


                    {/* delay before repeating */}
                    <div style={{ marginTop: '20px' }}>
                      <TextField type="number" id="delay_before" name="delay_before" variant="outlined" inputProps={{ min: 0 }} value={delayBefore} onChange={handleDisappearBefore} label='Delay Before Repeating:'
                        connectedRight={
                          <Select
                            label="Unit of time"
                            labelHidden
                            options={['Seconds']}
                          />
                        }
                        helpText={
                          <span>
                            Wait this many seconds to show Free Shipping Bar again (unless cart value changes).
                          </span>
                        } />
                    </div>
                    {/* end delay before repeating */}


                    {/* time to fade in/out */}
                    <div style={{ marginTop: '20px' }}>
                      <TextField type="number" id="time" name="time" variant="outlined" inputProps={{ min: 0 }} value={time} onChange={handleFadeOut} label='Time to Fade In/Out:'
                        connectedRight={
                          <Select
                            label="Unit of time"
                            labelHidden
                            options={['Seconds']}
                          />
                        }
                        helpText={
                          <span>
                            Bar will not fade if set to 0.
                          </span>
                        } />
                    </div>
                    {/* end time to fade in/out */}
                  </Collapsible>
                </Card>
                {/* end style configuration */}

                {/* Targeting Configuration */}
                <Card sectioned>
                  <Stack>
                    <Stack.Item fill>
                      <p style={{ fontWeight: 'bold', fontSize: '15px' }}>Targeting Configuration</p>
                    </Stack.Item>
                    <Stack.Item>
                      <Button onClick={handleTargetingconfiguration}
                        ariaExpanded={open}
                        ariaControls="basic-collapsible"><Icon
                          source={ChevronDownMinor}
                          color="base"
                        /></Button>
                    </Stack.Item>
                  </Stack>
                  <Collapsible
                    open={targetingconfiguration}
                    id="basic-collapsible"
                    transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                  >

                    {/* display on page */}
                    <Stack>
                      <p>Display on Page:</p>
                      <Icon
                        source={
                          PlayCircleMajor
                        }
                        color="base"
                      />
                      <Link
                        url="https://support.hextom.com/hc/en-us/articles/11725619312147"
                        removeUnderline
                      >
                        Tutorial Video
                      </Link>
                    </Stack>
                    <div
                      style={{
                        marginTop: '20px',
                      }}
                    >
                      <Stack vertical>
                        <RadioButton
                          label="All pages"
                          checked={
                            value ===
                            'all'
                          }
                          id="all"
                          name="all"
                          onChange={
                            handleChangeRadioBtn
                          }
                        />
                        <RadioButton
                          label="Homepage only"
                          id="home"
                          name="home"
                          checked={
                            value ===
                            'home'
                          }
                          onChange={
                            handleChangeRadioBtn
                          }
                        />
                        <RadioButton
                          label="Only on Page with URL (Copy and Paste the URL below)"
                          id="display_urlpage"
                          name="display_urlpage"
                          checked={
                            value ===
                            'display_urlpage'
                          }
                          onChange={
                            handleChangeRadioBtn
                          }
                        />
                        {value ===
                          'display_urlpage' && (
                            <TextField
                              id="display_page_url"
                              label="Page URL"
                              name="display_page_url"
                              variant="outlined"
                              value={
                                displayPageUrl
                              }
                              onChange={handleDisplayPageUrl}
                              helpText={
                                <span>
                                  Input the link address above (you can copy and paste the page URL directly into the field)
                                </span>
                              }
                            />
                          )}
                        <RadioButton
                          label="Only on Pages that contain the keyword in their URLs"
                          id="display_keywords"
                          name="display_keywords"
                          checked={
                            value ===
                            'display_keywords'
                          }
                          onChange={
                            handleChangeRadioBtn
                          }
                        />
                        {value ===
                          'display_keywords' && (
                            <TextField
                              id="display_page_keywords"
                              type="text"
                              label="Keywords"
                              name="display_page_keywords"
                              variant="outlined"
                              value={
                                displayPageKeywords
                              }
                              onChange={handleDisplayPageKeyword}
                              error={Boolean(keywordError)}
                              helpText={
                                <span>
                                  Input the Keywords above. Use commas to separate if there are multiple keywords. The bar displays if any keyword is matched
                                </span>
                              }
                            />
                          )}
                        {keywordError && (
                          <div style={{ color: 'red', marginTop: '0.5rem' }}>
                            {keywordError}
                          </div>
                        )}
                      </Stack>
                    </div>
                    {/* end display on page */}

                    {/* exclude page */}
                    <div
                      style={{
                        marginTop: '20px',
                      }}
                    >
                      <Stack>
                        <p>Exclude Page:</p>
                        <Icon
                          source={
                            PlayCircleMajor
                          }
                          color="base"
                        />
                        <Link
                          url="https://support.hextom.com/hc/en-us/articles/11725619312147"
                          removeUnderline
                        >
                          Tutorial Video
                        </Link>
                      </Stack>
                      <Stack vertical>
                        <RadioButton
                          label="Do NOT exclude any page"
                          checked={
                            value1 ===
                            'notexclude'
                          }
                          id="notexclude"
                          name="notexclude"
                          onChange={
                            handleChangeRadioBtnExclude
                          }
                        />
                        <RadioButton
                          label="Homepage only"
                          id="home_page"
                          name="home_page"
                          checked={
                            value1 ===
                            'home_page'
                          }
                          onChange={
                            handleChangeRadioBtnExclude
                          }
                        />
                        <RadioButton
                          label="Only exclude Page with URL (Copy and Paste the URL below)"
                          id="display_exclude_urlpage"
                          name="display_exclude_urlpage"
                          checked={
                            value1 ===
                            'display_exclude_urlpage'
                          }
                          onChange={
                            handleChangeRadioBtnExclude
                          }
                        />
                        {value1 ===
                          'display_exclude_urlpage' && (
                            <TextField
                              id="exclude_page_url"
                              label="Page URL"
                              name="exclude_page_url"
                              variant="outlined"
                              value={
                                displayexcludePageUrl
                              }
                              onChange={handleDisplayExcludePageUrl}
                              helpText={
                                <span>
                                  Input the link address above (you can copy and paste the page URL directly into the field)
                                </span>
                              }
                            />
                          )}
                        <RadioButton
                          label="Only exclude Pages that contain the keyword in their URLs"
                          id="display_exclude_keywords"
                          name="display_exclude_keywords"
                          checked={
                            value1 ===
                            'display_exclude_keywords'
                          }
                          onChange={
                            handleChangeRadioBtnExclude
                          }
                        />
                        {value1 ===
                          'display_exclude_keywords' && (
                            <TextField
                              id="display_page_exclude_keywords"
                              type="text"
                              label="Keywords"
                              name="display_page_exclude_keywords"
                              variant="outlined"
                              value={
                                displayexcludePageKeywords
                              }
                              onChange={handleDisplayExcludePageKeyword}
                              helpText={
                                <span>
                                  Input the Keywords above. Use commas to separate if there are multiple keywords. The bar displays if any keyword is matched
                                </span>
                              }
                            />
                          )}
                      </Stack>
                    </div>
                    {/* end exclude page */}


                    {/* device target */}
                    <div
                      style={{
                        marginTop: '20px',
                      }}
                    >
                      <Stack>
                        <p>Device Target:</p>
                      </Stack>
                      <Stack vertical>
                        <RadioButton
                          label="Display on both desktop and mobile browsers. On mobile browsers font size will be capped to achieve optimum display"
                          checked={value3 === 'displayboth'}
                          id="displayboth"
                          name="displayboth"
                          onChange={
                            handleDeviceTarget
                          }
                        />
                        <RadioButton
                          label="Display only on desktop browsers"
                          checked={value3 === 'displaydesktop'}
                          id="displaydesktop"
                          name="displaydesktop"
                          onChange={
                            handleDeviceTarget
                          }
                        />
                        <RadioButton
                          label="Display only on mobile browsers"
                          checked={value3 === 'displaymobile'}
                          id="displaymobile"
                          name="displaymobile"
                          onChange={
                            handleDeviceTarget
                          }
                        />
                      </Stack>
                    </div>
                    {/* end device target */}
                  </Collapsible>
                </Card>
                {/* end targeting configuration */}

                {/* cancel and save btns */}
                <Card sectioned>
                  <Stack>
                    <Stack.Item fill></Stack.Item>
                    <Stack.Item>
                      <Button onClick={handleClear}>Cancel</Button>
                    </Stack.Item>
                    <Stack.Item>
                      {Id === 0 ?
                        <Button primary onClick={handleSubmit}>Save</Button>
                        :
                        <Button primary onClick={() => handleUpdateData(Id)}>Update</Button>
                      }
                    </Stack.Item>
                  </Stack>
                </Card>
                {/* end cancel and save btns */}
              </>
              : ''}

          </Layout.Section>
        </Layout>

      </Page>

    </>
  )
}

export default index
