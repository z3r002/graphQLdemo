import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

void main() {
  runApp(MaterialApp(
      title: 'GraphQL App',
      home: MyApp()
  ));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final HttpLink httpLink = HttpLink(
        uri: 'https://countries.trevorblades.com/');
    final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
        GraphQLClient(link: httpLink as Link,
            cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject))
    );
    return GraphQLProvider(
      child: HomePage(),
      client: client,
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('GraphQL Client'),
        ),
        body: Query(
            options: QueryOptions(
          //       document: r"""
          // query GetContinents{
          //       countries{
          //         name
          //       }
          //     }
          // """,
                    document: r"""
       query {
  countries {
    name
  }
}

          """,

            ),
            builder: (QueryResult result, {
              Refetch refetch,
              FetchMore fetchMore,
            }) {
              if (result.data == null) {
                return Text('NO DATA');
              }
              return ListView.builder(
                itemBuilder: (BuildContext context, int index){
                  return ListTile(
                    title: Text(result.data['countries'][index]['name']),
                  );
                },
                itemCount: result.data['countries'].length,

              );
            }
        ));
  }
}

