import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    months: [
      {
        name: "January",
        start: "sat",
        end: 31,
      },
      {
        name: "February",
        start: "tue",
        end: 28,
      },
      {
        name: "March",
        start: "tue",
        end: 31,
      },
      {
        name: "April",
        start: "fri",
        end: 30,
      },
      {
        name: "May",
        start: "sun",
        end: 31,
      },
      {
        name: "June",
        start: "wed",
        end: 30,
      },
      {
        name: "July",
        start: "fri",
        end: 31,
      },
      {
        name: "August",
        start: "mon",
        end: 31,
      },
      {
        name: "September",
        start: "thu",
        end: 30,
      },
      {
        name: "October",
        start: "sat",
        end: 31,
      },
      {
        name: "November",
        start: "tue",
        end: 30,
      },
      {
        name: "December",
        start: "thu",
        end: 31,
      },
    ],
    days: [
      { title: "sun", bgColor: "bg-amber-200" },
      { title: "mon", bgColor: "bg-green-200" },
      { title: "tue", bgColor: "bg-red-200" },
      { title: "wed", bgColor: "bg-blue-200" },
      { title: "thu", bgColor: "bg-orange-200" },
      { title: "fri", bgColor: "bg-lime-200" },
      { title: "sat", bgColor: "bg-violet-200" },
    ],
    events: [
      // JANUARY --------------------------------------------------------------------
      {
        title: "tahun baru",
        day: [1],
        month: "January",
        image: "tahun baru.png",
      },
      {
        title: "keputeraan YDP negeri sembilan",
        day: [14],
        month: "January",
        image: "negeri sembilan.png",
      },
      {
        title: "thaipusam",
        day: [18],
        month: "January",
        image: "thaipusam.png",
      },

      // FEBRUARY --------------------------------------------------------------------
      {
        title: "tahun baru cina",
        day: [1, 2],
        month: "February",
        image: "tahun baru cina.png",
      },
      {
        title: "wilayah persekutuan",
        day: [1],
        month: "February",
        image: "wilayah persekutuan.png",
      },
      {
        title: "hari kekasih",
        day: [14],
        month: "February",
        image: "hari kekasih.png",
      },
      {
        title: "chap goh mei",
        day: [15],
        month: "February",
        image: "chap goh mei.png",
      },

      // MARCH --------------------------------------------------------------------
      {
        title: "israk & mikraj",
        day: [1],
        month: "March",
        image: "israk & miraj.png",
      },
      {
        title: "ulang tahun pertabalan sultan terengganu",
        day: [4],
        month: "March",
        image: "terengganu.png",
      },
      {
        title: "keputeraan sultan johor",
        day: [23],
        month: "March",
        image: "johor.png",
      },

      // APRIL --------------------------------------------------------------------
      {
        title: "awal ramadhan",
        day: [3],
        month: "April",
        image: "ramadhan.png",
      },
      {
        title: "hari melaka bandaraya bersejarah",
        day: [15],
        month: "April",
        image: "melaka.png",
      },
      {
        title: "nuzul al-quran",
        day: [19],
        month: "April",
        image: "nuzul al-quran.png",
      },
      {
        title: "keputeraan sultan terengganu",
        day: [26],
        month: "April",
        image: "terengganu.png",
      },

      // MAY --------------------------------------------------------------------
      {
        title: "hari pekerja",
        day: [1],
        month: "May",
        image: "hari pekerja.png",
      },
      {
        title: "hari raya puasa",
        day: [3, 4],
        month: "May",
        image: "hari raya puasa.png",
      },
      {
        title: "hari ibu",
        day: [8],
        month: "May",
        image: "hari ibu.png",
      },
      {
        title: "keputeraan raja perlis",
        day: [17],
        month: "May",
        image: "perlis.png",
      },
      {
        title: "pesta keamatan",
        day: [30, 31],
        month: "May",
        image: "sabah.png",
      },

      // JUNE --------------------------------------------------------------------
      {
        title: "hari gawai",
        day: [1, 2],
        month: "June",
        image: "sarawak.png",
      },
      {
        title: "dragon boat festival",
        day: [3],
        month: "June",
        image: "dragon boat festival.png",
      },
      {
        title: "keputeraan YDP agong",
        day: [6],
        month: "June",
        image: "agong.png",
      },
      {
        title: "keputeraan sultan kedah",
        day: [19],
        month: "June",
        image: "kedah.png",
      },
      {
        title: "hari bapa",
        day: [19],
        month: "June",
        image: "hari bapa.png",
      },

      // JULY --------------------------------------------------------------------
      {
        title: "hari arafah",
        day: [9],
        month: "July",
        image: "hari arafah.png",
      },
      {
        title: "hari jadi YDP pulau pinang",
        day: [9],
        month: "July",
        image: "pulau pinang.png",
      },
      {
        title: "hari raya haji",
        day: [10, 11],
        month: "July",
        image: "hari raya haji.png",
      },
      {
        title: "hari sarawak",
        day: [22],
        month: "July",
        image: "sarawak.png",
      },
      {
        title: "awal muharram",
        day: [30],
        month: "July",
        image: "awal muharram.png",
      },
      {
        title: "keputeraan sultan pahang",
        day: [30],
        month: "July",
        image: "pahang.png",
      },

      // AUGUST --------------------------------------------------------------------
      {
        title: "hungry ghost festival",
        day: [12],
        month: "August",
        image: "hungry ghost festival.png",
      },
      {
        title: "hari jadi YDP melaka",
        day: [24],
        month: "August",
        image: "melaka.png",
      },
      {
        title: "hari kebangsaan",
        day: [31],
        month: "August",
        image: "malaysia.png",
      },

      // SEPTEMBER --------------------------------------------------------------------
      {
        title: "hari hol almarhum sultan iskandar",
        day: [1],
        month: "September",
        image: "johor.png",
      },
      {
        title: "mid autumn festval",
        day: [10],
        month: "September",
        image: "mid autumn festival.png",
      },
      {
        title: "hari malaysia",
        day: [16],
        month: "September",
        image: "malaysia.png",
      },

      // OCTOBER --------------------------------------------------------------------
      {
        title: "hari jadi YDP sabah",
        day: [1],
        month: "October",
        image: "sabah.png",
      },
      {
        title: "hari jadi YDP sarawak",
        day: [8],
        month: "October",
        image: "sarawak.png",
      },
      {
        title: "maulidur rasul",
        day: [9],
        month: "October",
        image: "maulidur rasul.png",
      },
      {
        title: "hari deepavali",
        day: [24],
        month: "October",
        image: "hari deepavali.png",
      },

      // NOVEMBER --------------------------------------------------------------------
      {
        title: "keputeraan sultan perak",
        day: [4],
        month: "November",
        image: "perak.png",
      },
      {
        title: "keputeraan sultan kelantan",
        day: [11, 12],
        month: "November",
        image: "kelantan.png",
      },

      // DECEMBER --------------------------------------------------------------------
      {
        title: "keputeraan sultan selangor",
        day: [11],
        month: "December",
        image: "selangor.png",
      },
      {
        title: "winter solstice",
        day: [22],
        month: "December",
        image: "winter solstice.png",
      },
      {
        title: "christmas eve",
        day: [24],
        month: "December",
        image: "christmas eve.png",
      },
      {
        title: "hari krismas",
        day: [25],
        month: "December",
        image: "hari krismas.png",
      },
    ],
  },
});

export default app;
