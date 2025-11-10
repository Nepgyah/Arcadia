import graphene
import kiku.schema
import miru.schema
import yomu.schema
import asobu.schema
import tsunagu.schema

class Query(
    kiku.schema.Query,
    miru.schema.Query,
    yomu.schema.Query,
    asobu.schema.Query,
    tsunagu.schema.Query,
    graphene.ObjectType
):
    pass

schema = graphene.Schema(query=Query)