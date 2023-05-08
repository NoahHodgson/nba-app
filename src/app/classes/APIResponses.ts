//  object from api
export type GameResponse = {
    id: number,
    date: string,
    home_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
    },
    home_team_score: number,
    period: number,
    postseason: boolean,
    season: number,
    status: string,
    time: string,
    visitor_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
    },
    visitor_team_score: 87
}

export type StatResponse = {
        "data":
          {
            "id":number,
            "ast":number,
            "blk":number,
            "dreb":number,
            "fg3_pct":number,
            "fg3a":number,
            "fg3m":number,
            "fg_pct":number,
            "fga":number,
            "fgm":number,
            "ft_pct":number,
            "fta":number,
            "ftm":number,
            "game":{
              "id":number,
              "date":string,
              "home_team_id":number,
              "home_team_score":number,
              "season":number,
              "visitor_team_id":number,
              "visitor_team_score":number
            },
            "min":string,
            "oreb":number,
            "pf":number,
            "player":{
              "id":145,
              "first_name":string,
              "last_name":string,
              "position":string,
              "team_id":number
            },
            "pts":number,
            "reb":number,
            "stl":number,
            "team":{
              "id":number,
              "abbreviation":string,
              "city":string,
              "conference":string,
              "division":string,
              "full_name":string,
              "name":string
            },
            "turnover":number
        }[]
}

export type GamePlayer = {
    "id":number,
    "ast":number,
    "blk":number,
    "dreb":number,
    "fg3_pct":number,
    "fg3a":number,
    "fg3m":number,
    "fg_pct":number,
    "fga":number,
    "fgm":number,
    "ft_pct":number,
    "fta":number,
    "ftm":number,
    "game":{
      "id":number,
      "date":string,
      "home_team_id":number,
      "home_team_score":number,
      "season":number,
      "visitor_team_id":number,
      "visitor_team_score":number
    },
    "min":string,
    "oreb":number,
    "pf":number,
    "player":{
      "id":145,
      "first_name":string,
      "last_name":string,
      "position":string,
      "team_id":number
    },
    "pts":number,
    "reb":number,
    "stl":number,
    "team":{
      "id":number,
      "abbreviation":string,
      "city":string,
      "conference":string,
      "division":string,
      "full_name":string,
      "name":string
    },
    "turnover":number
}