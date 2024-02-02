// Search ANIME, NANGA, DAN CHARACTER Berdasarkan AniList.co
const fetch = require('node-fetch')

// Memberikan data TRENDING MANGA berdasarkan AniList.co
async function getTrendingManga() {
  const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(sort: TRENDING_DESC, type: MANGA) {
          id
          title {
            romaji
            english
          }
          genres
          format
          coverImage {
            large
          }
        }
      }
    }
  `;

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const trendingManga = data.data.Page.media;

  return trendingManga;
}

// Memberikan data TRENDING ANIME berdasarkan AniList.co
async function getTrendingAnime() {
  const query = `
    query {
      Page(page: 1, perPage: 10) {
        media(sort: TRENDING_DESC, type: ANIME) {
          id
          title {
            romaji
            english
          }
          genres
          format
          coverImage {
            large
          }
        }
      }
    }
  `;

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const trendingAnime = data.data.Page.media;

  return trendingAnime;
}

// Pencarian ANIME berdasarkan nama
async function searchAnimeByName(animeName) {
  const query = `
    query ($name: String) {
      Page(page: 1, perPage: 10) {
        media(search: $name, type: ANIME) {
          id
          title {
            romaji
            english
          }
          description
          coverImage {
            large
          }
          genres
          format
        }
      }
    }
  `;

  const variables = {
    name: animeName,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const animeList = data.data.Page.media;

  return animeList;
}

// Memberikan detail ANIME berdasakan ID
async function searchAnimeById(animeId) {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
        }
        description
        coverImage {
          large
        }
        genres
        format
        episodes
        duration
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        seasonYear
        averageScore
        characters {
          nodes {
            id
            name {
              full
              native
            }
            image {
              large
            }
          }
        }
      }
    }
  `;

  const variables = {
    id: animeId,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const anime = data.data.Media;

  return anime;
}

// Pencarian MANGA berdasarkan nama
async function searchMangaByName(mangaName) {
  const query = `
    query ($name: String) {
      Page(page: 1, perPage: 10) {
        media(search: $name, type: MANGA) {
          id
          title {
            romaji
            english
          }
          description
          coverImage {
            large
          }
          genres
          format
        }
      }
    }
  `;

  const variables = {
    name: mangaName,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const mangaList = data.data.Page.media;

  return mangaList;
}

// Pencarian MANGA berdasarkan ID
async function searchMangaById(mangaId) {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: MANGA) {
        id
        title {
          romaji
          english
        }
        description
        coverImage {
          large
        }
        genres
        format
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        averageScore
        chapters
        volumes
      }
    }
  `;

  const variables = {
    id: mangaId,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const manga = data.data.Media;

  return manga;
}

// Pencarian CHARACTER berdasarkan nama
async function searchCharacterByName(characterName) {
  const query = `
    query ($name: String) {
      Page(page: 1, perPage: 10) {
        characters(search: $name) {
          id
          name {
            full
            native
          }
          image {
            large
          }
          media {
            nodes {
              characters {
                edges {
                  role
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    name: characterName,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const characterList = data.data.Page.characters;

  return characterList;
}

// Memberikan detail CHARACTER berdasarkan ID
async function searchCharacterById(characterId) {
  const query = `
    query ($id: Int) {
      Character(id: $id) {
        id
        name {
          full
          native
        }
        image {
          large
        }
        description
        media {
          nodes {
            title {
              romaji
              english
            }
            type
            genres
            id
          }
        }
        gender
      }
    }
  `;

  const variables = {
    id: characterId,
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  const character = data.data.Character;

  return character;
}

module.exports = {
	getTrendingAnime,
	searchAnimeById,
	searchAnimeByName,
  getTrendingManga,
  searchMangaById,
	searchMangaByName,
  searchCharacterById,
	searchCharacterByName
}
