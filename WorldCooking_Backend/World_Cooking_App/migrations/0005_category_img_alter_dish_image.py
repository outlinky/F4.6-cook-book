# Generated by Django 4.0 on 2021-12-30 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('World_Cooking_App', '0004_alter_ingredient_dish'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='img',
            field=models.ImageField(default='test.jpg', upload_to='static/images/flags', verbose_name='Flag of the Country'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='dish',
            name='image',
            field=models.ImageField(default='static/images/dishes/default_dish.jpg', upload_to='static/images/dishes', verbose_name='Picture of the Dish'),
        ),
    ]
