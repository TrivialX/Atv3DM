import React, { useState, useEffect } from "react";
import { Button, FlatList, Image, ImageSourcePropType, View, StyleSheet, Dimensions } from "react-native";

const images = [require("./assets/im1.jpg"), require("./assets/im2.jpg"), require("./assets/im3.jpg")];

const windowWidth = Dimensions.get("window").width;
const columnWidth = windowWidth / 3;

function RandomImage() {
  const [displayedImages, setDisplayedImages] = useState<ImageSourcePropType[]>([]);
  const [imageSizes, setImageSizes] = useState<{ [key: number]: { height: number } }>({});

  useEffect(() => {
    const initialSizes = images.reduce((sizes, _, index) => {
      sizes[index] = getRandomSize();
      return sizes;
    }, {});
    setImageSizes(initialSizes);
  }, []);

  function addRandomImage() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setDisplayedImages(prevImages => {
      const newImages = [...prevImages, randomImage];
      setImageSizes(prevSizes => ({ ...prevSizes, [newImages.length - 1]: getRandomSize() }));
      return newImages;
    });
  }

  function getRandomSize() {
    const minHeight = 50;
    const maxHeight = 200;

    const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    return { height };
  }

  const renderItem = ({ item, index }: { item: ImageSourcePropType; index: number }) => {
    const { height } = imageSizes[index] || { height: 100 }; // Use 100 as a default value

    return (
      <Image
        source={item}
        style={{
          width: columnWidth,
          height,
          resizeMode: "cover",
          margin: 5
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar Imagem Aleatória" onPress={addRandomImage} />
      <FlatList
        data={displayedImages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal={false}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default RandomImage;
