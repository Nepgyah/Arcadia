import graphene
import kiku.schema
import miru.schema

class Query(
    kiku.schema.Query,
    miru.schema.Query,
    graphene.ObjectType
):
    pass

schema = graphene.Schema(query=Query)