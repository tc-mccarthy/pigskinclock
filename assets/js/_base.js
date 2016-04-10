var pigskin = {

    teams: [{
            team: "Pittsburg Steelers",
            slug: "pittsburg-steelers",
            season: {
                date: "2016-09-10 13:00:00",
                opponent: "new-england-patriots"
            },
            home: {
                date: "2016-09-10 13:00:00",
                opponent: "new-england-patriots"
            },
            logo: ""
        },

        {
            team: "New England Patriots",
            slug: "new-england-patriots",
            season: {
                date: "2016-09-10 13:00:00",
                opponent: "pittsburg-steelers"
            },
            home: {
                date: "2016-09-20 13:00:00",
                opponent: "buffalo-bills"
            },
            logo: ""
        },

        {
            team: "Green Bay Packers",
            slug: "green-bay-packers",
            season: {
                date: "2016-09-13 13:00:00",
                opponent: "chicago-bears"
            },
            home: {
                date: "2016-09-13 13:00:00",
                opponent: "chicago-bears"
            },
            logo: ""
        },

        {
            team: "Chicago Bears",
            slug: "chicago-bears",
            season: {
                date: "2016-09-13 13:00:00",
                opponent: "green-bay-packers"
            },
            home: {
                date: "2016-09-27 13:00:00",
                opponent: "seattle-seahawks"
            },
            logo: ""
        },

        // {
        //     team: "Kansas City Chiefs",
        //     slug: "kansas-city-chiefs",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Houston Texans",
        //     slug: "houston-texans",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-20 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Cleveland Browns",
        //     slug: "cleveland-browns",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "New York Jets",
        //     slug: "new-york-jets",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-21 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Indianapolis Colts",
        //     slug: "Indianapolis-colts",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Buffalo Bills",
        //     slug: "buffalo-bills",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-27 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Miami Dolphins",
        //     slug: "miami-dolphins",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Washington Redskins",
        //     slug: "washington-redskins",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-24 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Carolina Panthers",
        //     slug: "carolina-panthers",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Jacksonville Jaguars",
        //     slug: "jacksonville-jaguars",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-27 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Seattle Seahawks",
        //     slug: "seattle-seahawks",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "St. Louis Rams",
        //     slug: "st-louis-rams",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-20 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "New Orleans Saints",
        //     slug: "new-orleans-saints",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Arizona Cardinals",
        //     slug: "arizona-cardinals",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-20 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Detroit Lions",
        //     slug: "detroit-lions",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

        // {
        //     team: "Miami Dolphins",
        //     slug: "miami-dolphins",
        //     season: "2016-09-13 13:00:00",
        //     home: "2016-09-13 13:00:00",
        //     logo: ""
        // },

    ],

    init: function() {
        var _this = this;

        $(_this.onReady.bind(_this));
    },

    onReady: function() {
        var _this = this;
    }
};

pigskin.init();