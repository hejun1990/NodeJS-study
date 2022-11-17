# 一、数据库操作
# 查询当前数据库
db
# 查询所有的数据库
show dbs
# 创建或切换数据库
use mall
# 删除数据库
db.dropDatabase()

# 二、集合操作
# 创建一个集合
db.createCollection('collectionName')
# 得到当前db的所有集合
db.getCollectionNames()
# 显示当前db所有集合的状态
db.printCollectionStats()

# 1. 插入数据
# deprecated
db.account.insert([{name:'李明',age:25,sex:true}])
# insertOne
db.account.insertOne({name:'李明',age:25,sex:true})
# insertMany
db.account.insertMany([{name:'李明',age:25,sex:true},{name:'王欣',age:17,sex:false}])

# 2. 修改数据
db.account.updateOne({name:'李明'},{$set:{age:30,department:'企划部',height:170}})
db.account.updateMany({age:{$gt:35}},{$inc:{salary:100}})

# 3. 删除数据
db.account.deleteOne({age:{$gt:35}})
db.account.deleteMany({age:{$gt:35}})

# 4. 查询数据
# 4.1 去重查询
db.account.distinct('name')
# 4.2 大于、小于、大于等于、小于等于、不等于查询
    # 大于
        db.account.find({age:{$gt:25}})
    # 小于
        db.account.find({age:{$lt:25}})
    # 大于等于
        db.account.find({age:{$gte:25}})
    # 小于等于
        db.account.find({age:{$lte:25}})
    # 不等于
        db.account.find({age:{$ne:18}})
    # 大于n并且小于m
        db.account.find({age:{$gt:30,$lt:40}})
# 4.3 正则查询
db.account.find({name:/^张/})
# 4.4 去除指定域查询（不显示第二个参数里的字段）
db.account.find({},{height:0,department:0,salary:0})
# 4.5 指定域查询（只显示第二个参数里的字段）
db.account.find({},{height:1,name:1})
# 4.6 排序
    # 升序
        db.account.find().sort({age:1})
    # 降序
        db.account.find().sort({age:-1})
# 4.7 查询n条以后的数据
db.account.find().sort({age:1}).skip(3)
# 4.8 查询前n条数据
db.account.find().sort({age:1}).limit(5)
# 4.9 查询跳过n条数据后m条数据（分页查询）
db.account.find().sort({age:1}).skip(3).limit(5)
# 4.10 or查询
db.account.find({$or:[{age:18},{age:30}]})
# 4.11 查询记录数
db.account.find({age:{$ne:18}}).count()

