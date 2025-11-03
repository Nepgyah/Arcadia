import graphene
import kiku.schema
import miru.schema
import yomu.schema
import asobu.schema

class Query(
    kiku.schema.Query,
    miru.schema.Query,
    yomu.schema.Query,
    asobu.schema.Query,
    graphene.ObjectType
):
    pass

schema = graphene.Schema(query=Query)