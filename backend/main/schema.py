import graphene
import kiku.schema

class Query(
    kiku.schema.Query,
    graphene.ObjectType
):
    pass

schema = graphene.Schema(query=Query)