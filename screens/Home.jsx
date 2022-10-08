import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import menuIcon from "../assets/icons/menu.png";
import notificationsIcon from "../assets/icons/notifications.png";
import starIcon from "../assets/icons/star.png";
import clockIcon from "../assets/icons/clock.png";

const popular = [
  {
    id: 1,
    title: "Cobra Kai",
    rating: "8.1/10 IMDb",
    categories: ["Action & Adventure", "Drama", "Comedy"],
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
    },
    duration: "30m",
  },
  {
    id: 2,
    title: "Rick and Morty",
    rating: "8.9/10 IMDb",
    categories: [
      "Animation",
      "Comedy",
      "Sci-Fi & Fantasy",
      "Action & Adventure",
    ],
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
    },
    duration: "22m",
  },
  {
    id: 3,
    title: "Blonde",
    rating: "6.9/10 IMDb",
    categories: ["Drama"],
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/jOgbnL5FB30pprEjZaY1E1iPtPM.jpg",
    },
    duration: "2h 47m",
  },
  {
    id: 4,
    title: "She-Hulk: Attorney at Law",
    rating: "7.0/10 IMDb",
    categories: ["Comedy", "Sci-Fi & Fantasy"],
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/3qO7wycn6o0lUJf15dupMFbEBTY.jpg",
    },
    duration: "38m",
  },
];

const movies = [
  {
    id: 1,
    title: "The Sandman",
    rating: "7.7/10 IMDb",
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
    },
    duration: "1h 05m",
  },
  {
    id: 2,
    title: "Peaky Blinders",
    rating: "8.8/10 IMDb",
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    },
    duration: "1h 50m",
  },
  {
    id: 3,
    title: "Doctor Strange in the Multiverse of Madness",
    rating: "7.0/10 IMDb",
    image: {
      uri: "https://www.themoviedb.org/t/p/w1280/aCjAffuck6zZ3WIJ4zX7ls6c0sM.jpg",
    },
    duration: "2h 20m",
  },
];

const Home = () => {
  const [loaded] = useFonts({
    "PTSerif-Regular": require("../assets/fonts/PTSerif-Regular.ttf"),
    "PTSerif-Bold": require("../assets/fonts/PTSerif-Bold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return <Text>Loading fonts...</Text>;
  }

  const renderShowcaseItem = ({ item }) => {
    const { title, image, rating } = item;
    return (
      <TouchableOpacity>
        <View style={styles.showcaseItem}>
          <Image
            source={image}
            resizeMode="cover"
            style={styles.showcaseItemImage}
          />
          <View style={styles.showcaseItemData}>
            <Text style={styles.movieTitle}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={starIcon}
                resizeMode="contain"
                style={styles.starIcon}
              />
              <Text style={styles.movieRating}>{rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMovieItem = (item) => {
    const { id, title, image, rating, duration, categories } = item;
    return (
      <TouchableOpacity key={id}>
        <View style={styles.movieItem}>
          <Image
            source={image}
            resizeMode="cover"
            style={styles.movieItemImage}
          />
          <View style={styles.movieItemData}>
            <Text style={styles.movieTitle}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={starIcon}
                resizeMode="contain"
                style={styles.starIcon}
              />
              <Text style={styles.movieRating}>{rating}</Text>
            </View>
            <View style={styles.movieCategories}>
              {categories.map((category) => (
                <Text style={styles.movieCategory}>{category}</Text>
              ))}
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={clockIcon}
                resizeMode="contain"
                style={styles.starIcon}
              />
              <Text style={styles.movieDuration}>{duration}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor="#ffffff" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={menuIcon}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.logo}>NativeFlix</Text>
        <TouchableOpacity>
          <Image
            source={notificationsIcon}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Now Showing</Text>
            <FlatList
              horizontal
              data={movies}
              renderItem={renderShowcaseItem}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular</Text>
            {popular.map((movie) => {
              return renderMovieItem(movie);
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  logo: {
    fontSize: 22,
    fontFamily: "PTSerif-Bold",
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "PTSerif-Bold",
  },
  showcaseItem: {
    marginRight: 20,
    minHeight: 300,
    width: 200,
  },
  showcaseItemImage: {
    height: 200,
    marginBottom: 10,
    borderRadius: 12,
  },
  showcaseItemData: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    marginBottom: 10,
  },
  movieRating: {
    fontSize: 16,
    color: "grey",
    fontFamily: "Montserrat-Regular",
  },
  movieItem: {
    marginBottom: 20,
    minHeight: 170,
    // width: 200,
    flexDirection: "row",
  },
  movieItemImage: {
    flex: 1,
    marginRight: 20,
    borderRadius: 12,
  },
  movieItemData: {
    flex: 2,
  },
  movieCategories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  movieCategory: {
    fontFamily: "Montserrat-Regular",
    backgroundColor: "#DDE3FF",
    color: "#89A3E6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 10,
  },
  movieDuration: {
    fontSize: 16,
    color: "black",
    fontFamily: "Montserrat-Regular",
  },
});
