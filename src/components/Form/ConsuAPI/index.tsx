import React, { useEffect, useState } from "react";
import { Button, Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import axios from "axios"; // Importe o Axios
import tmdb from "./tmdb";
import { StyleSheet } from 'react-native';


// Defina um tipo para os resultados da pesquisa
interface SearchResult {
  id: number;
  title: string;
  overview: string;
  original_language: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;


  // Adicione mais propriedades conforme necessário
}

export default function ConsuAPI() {
  const [response, setResponse] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar a consulta de pesquisa
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // Defina o tipo de searchResults

  async function searchTmdb(query: string) {
    try {
      const response = await tmdb.get('/search/movie', {
        params: {
          query,
          include_adult: false,
        },
      });
      console.log(response.data);
      setResponse(response.data);
      setSearchResults(response.data.results as SearchResult[]); // Defina o tipo de searchResults
    } catch (error) {
      console.error("Erro ao buscar dados do TMDB:", error);
    }
  }

  const handleSearch = () => {
    searchTmdb(searchQuery);
  }

  return (
    <View >
      <TextInput
        placeholder="Digite sua pesquisa"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <TouchableOpacity
        onPress={handleSearch}
        style={styles3.buttonContainer}
      >
        <Text style={styles3.buttonText}>Pesquisar</Text>
      </TouchableOpacity>


      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles1.itemContainer}>
          <Text style={styles1.title}>{item.title}</Text>
          <Text style={styles1.overview}>{item.overview}</Text>
          <Text style={styles1.info}>Release Date: {item.release_date}</Text>
          <Text style={styles1.info}>Average Vote: {item.vote_average}</Text>
          <Text style={styles1.info}>Vote Count: {item.vote_count}</Text>
          <Text style={styles1.info}>Popularity: {item.popularity}</Text>
        </View>
        )}

      />
    </View>
  );
}

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  overview: {
    marginTop: 5,
  },
  info: {
    marginTop: 5,
    color: 'gray',
  },
});

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDiv: {
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});