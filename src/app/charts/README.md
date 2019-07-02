# highcharts

## series数据列

series这项配置，在整个配置的最外层有一个`series`，`配置项plotOptions`里面也有`series`，plotOptions中的配置，除了series这个配置外，其他的都是对应不同的图表进行数据列的配置，例如：`plotOptions.area`中也是有配置的，这里的配置在series中也是有的，由于`series.*`，`plotOptions.area.*`，`plotOptions.series.*`三个配置中都有，所有这里会有一个优先级的问题，`series.*` > `plotOptions.area.*` > `plotOptions.series.*`。

所以，一个容器如果包含多个图表类型的时候，需要合理的利用这种优先级，可以减少代码的编写量：

1. 所有图表的通用配置，plotOptions.series.*设置
2. 所有同类型的图表配置，plotOptions.chartType.*设置
3. 针对特定一个图表的设置，通过series.*设置

## 数据节点

数据节点是图表中最小的元素，每个数据节点都是一个数据单元，数据单元定义在`series.data`的数组中。

data中的属性有x，y：

- x: x轴对应的位置
- y: y轴对应的位置
- 还可以添加一些自定义的数据列，可以在提示框和数据标签中显示

data可以是对象数组，也可以是二维数组，二维数组相比对象数组的好处是，当有大量的数据时，可以不用写对象中的key，但是二维数组为了保证顺序，需要设置keys来指定字段的顺序。

简化为一维数组的话，需要满足条件，x轴坐标值是等差数列，设置x轴起始值和间隔值：pointStart和pointInterval。


