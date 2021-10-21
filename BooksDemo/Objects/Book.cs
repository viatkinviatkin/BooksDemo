﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Product_64396
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Book.
    /// </summary>
    // *** Start programmer edit section *** (Book CustomAttributes)

    // *** End programmer edit section *** (Book CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BookE", new string[] {
            "Title as \'Title\'",
            "Author as \'Author\'",
            "PagesCount as \'Pages count\'",
            "UrlCover as \'Url cover\'",
            "UrlDescription as \'Url description\'",
            "Tags as \'Tags\'",
            "AverageRating as \'Average rating\'"})]
    [View("BookL", new string[] {
            "Title as \'Title\'",
            "Author as \'Author\'",
            "PagesCount as \'Pages count\'",
            "UrlCover as \'Url cover\'",
            "UrlDescription as \'Url description\'",
            "Tags as \'Tags\'",
            "AverageRating as \'Average rating\'"})]
    public class Book : ICSSoft.STORMNET.DataObject
    {
        
        private string fTitle;
        
        private string fAuthor;
        
        private int fPagesCount;
        
        private ICSSoft.STORMNET.UserDataTypes.WebFile fUrlCover;
        
        private string fUrlDescription;
        
        private string fTags;
        
        // *** Start programmer edit section *** (Book CustomMembers)

        // *** End programmer edit section *** (Book CustomMembers)

        
        /// <summary>
        /// Title.
        /// </summary>
        // *** Start programmer edit section *** (Book.Title CustomAttributes)

        // *** End programmer edit section *** (Book.Title CustomAttributes)
        [StrLen(255)]
        public virtual string Title
        {
            get
            {
                // *** Start programmer edit section *** (Book.Title Get start)

                // *** End programmer edit section *** (Book.Title Get start)
                string result = this.fTitle;
                // *** Start programmer edit section *** (Book.Title Get end)

                // *** End programmer edit section *** (Book.Title Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Title Set start)

                // *** End programmer edit section *** (Book.Title Set start)
                this.fTitle = value;
                // *** Start programmer edit section *** (Book.Title Set end)

                // *** End programmer edit section *** (Book.Title Set end)
            }
        }
        
        /// <summary>
        /// Author.
        /// </summary>
        // *** Start programmer edit section *** (Book.Author CustomAttributes)

        // *** End programmer edit section *** (Book.Author CustomAttributes)
        [StrLen(255)]
        public virtual string Author
        {
            get
            {
                // *** Start programmer edit section *** (Book.Author Get start)

                // *** End programmer edit section *** (Book.Author Get start)
                string result = this.fAuthor;
                // *** Start programmer edit section *** (Book.Author Get end)

                // *** End programmer edit section *** (Book.Author Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Author Set start)

                // *** End programmer edit section *** (Book.Author Set start)
                this.fAuthor = value;
                // *** Start programmer edit section *** (Book.Author Set end)

                // *** End programmer edit section *** (Book.Author Set end)
            }
        }
        
        /// <summary>
        /// PagesCount.
        /// </summary>
        // *** Start programmer edit section *** (Book.PagesCount CustomAttributes)

        // *** End programmer edit section *** (Book.PagesCount CustomAttributes)
        public virtual int PagesCount
        {
            get
            {
                // *** Start programmer edit section *** (Book.PagesCount Get start)

                // *** End programmer edit section *** (Book.PagesCount Get start)
                int result = this.fPagesCount;
                // *** Start programmer edit section *** (Book.PagesCount Get end)

                // *** End programmer edit section *** (Book.PagesCount Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.PagesCount Set start)

                // *** End programmer edit section *** (Book.PagesCount Set start)
                this.fPagesCount = value;
                // *** Start programmer edit section *** (Book.PagesCount Set end)

                // *** End programmer edit section *** (Book.PagesCount Set end)
            }
        }
        
        /// <summary>
        /// UrlCover.
        /// </summary>
        // *** Start programmer edit section *** (Book.UrlCover CustomAttributes)

        // *** End programmer edit section *** (Book.UrlCover CustomAttributes)
        public virtual ICSSoft.STORMNET.UserDataTypes.WebFile UrlCover
        {
            get
            {
                // *** Start programmer edit section *** (Book.UrlCover Get start)

                // *** End programmer edit section *** (Book.UrlCover Get start)
                ICSSoft.STORMNET.UserDataTypes.WebFile result = this.fUrlCover;
                // *** Start programmer edit section *** (Book.UrlCover Get end)

                // *** End programmer edit section *** (Book.UrlCover Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.UrlCover Set start)

                // *** End programmer edit section *** (Book.UrlCover Set start)
                this.fUrlCover = value;
                // *** Start programmer edit section *** (Book.UrlCover Set end)

                // *** End programmer edit section *** (Book.UrlCover Set end)
            }
        }
        
        /// <summary>
        /// UrlDescription.
        /// </summary>
        // *** Start programmer edit section *** (Book.UrlDescription CustomAttributes)

        // *** End programmer edit section *** (Book.UrlDescription CustomAttributes)
        [StrLen(255)]
        public virtual string UrlDescription
        {
            get
            {
                // *** Start programmer edit section *** (Book.UrlDescription Get start)

                // *** End programmer edit section *** (Book.UrlDescription Get start)
                string result = this.fUrlDescription;
                // *** Start programmer edit section *** (Book.UrlDescription Get end)

                // *** End programmer edit section *** (Book.UrlDescription Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.UrlDescription Set start)

                // *** End programmer edit section *** (Book.UrlDescription Set start)
                this.fUrlDescription = value;
                // *** Start programmer edit section *** (Book.UrlDescription Set end)

                // *** End programmer edit section *** (Book.UrlDescription Set end)
            }
        }
        
        /// <summary>
        /// Tags.
        /// </summary>
        // *** Start programmer edit section *** (Book.Tags CustomAttributes)

        // *** End programmer edit section *** (Book.Tags CustomAttributes)
        [StrLen(255)]
        public virtual string Tags
        {
            get
            {
                // *** Start programmer edit section *** (Book.Tags Get start)

                // *** End programmer edit section *** (Book.Tags Get start)
                string result = this.fTags;
                // *** Start programmer edit section *** (Book.Tags Get end)

                // *** End programmer edit section *** (Book.Tags Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Tags Set start)

                // *** End programmer edit section *** (Book.Tags Set start)
                this.fTags = value;
                // *** Start programmer edit section *** (Book.Tags Set end)

                // *** End programmer edit section *** (Book.Tags Set end)
            }
        }
        
        /// <summary>
        /// AverageRating.
        /// </summary>
        // *** Start programmer edit section *** (Book.AverageRating CustomAttributes)

        // *** End programmer edit section *** (Book.AverageRating CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        public virtual double AverageRating
        {
            get
            {
                // *** Start programmer edit section *** (Book.AverageRating Get)

                return 0;
                // *** End programmer edit section *** (Book.AverageRating Get)
            }
            set
            {
                // *** Start programmer edit section *** (Book.AverageRating Set)

                // *** End programmer edit section *** (Book.AverageRating Set)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BookE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookE", typeof(IIS.Product_64396.Book));
                }
            }
            
            /// <summary>
            /// "BookL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookL", typeof(IIS.Product_64396.Book));
                }
            }
        }
    }
}
